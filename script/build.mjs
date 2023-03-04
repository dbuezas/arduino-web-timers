// @ts-check
import chokidar from 'chokidar'
import { execSync } from 'child_process'
import esbuild, { context } from 'esbuild'
import alias from 'esbuild-plugin-alias'

const date = new Date().toString()
const isProd = process.env.NODE_ENV === 'production'

import { createRequire } from 'module'
const _require = createRequire(import.meta.url)

const watchOptn = {
  // awaitWriteFinish: {stabilityThreshold:100, pollInterval:50},
  ignoreInitial: true
}
const synchPublic = async () => {
  execSync('cp public/* dist/')
}

async function build() {
  execSync('rm -rf dist/')
  execSync('mkdir dist')
  console.time('build')
  await synchPublic()

  const ctx = await esbuild.context({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    inject: ['src/preact-shim.js'],
    minify: isProd,
    metafile: true,
    treeShaking: true,

    sourcemap: isProd ? false : 'inline',
    outfile: 'dist/bundle.js',
    define: {
      NODE_ENV: process.env.NODE_ENV,
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.RUN_ENV': `undefined`,
      'process.env.REACT_APP_BUILD_TIME': `"${date}"`
    },
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  })
  console.timeEnd('build')
  const result = await ctx.rebuild?.()
  let text = result.metafile && (await esbuild.analyzeMetafile(result.metafile))
  console.log(text)

  if (!isProd) {
    chokidar.watch('public', { ignoreInitial: true }).on('all', () => {
      synchPublic()
    })
    chokidar.watch('src', watchOptn).on('all', async (...args) => {
      console.log(args)
      try {
        await ctx.rebuild?.()
      } catch (e) {
        console.error(e)
      }
    })
  } else {
    ctx.dispose()
  }
}

build()
