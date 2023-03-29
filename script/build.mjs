// @ts-check
import { execSync } from 'child_process'
import esbuild from 'esbuild'
import { lessLoader } from 'esbuild-plugin-less'

const date = new Date().toString()
const isProd = process.env.NODE_ENV === 'production'
const isWatch = !!process.env.WATCH

import { createRequire } from 'module'
const _require = createRequire(import.meta.url)

const watchOptn = {
  // awaitWriteFinish: {stabilityThreshold:100, pollInterval:50},
  ignoreInitial: true
}
const synchPublic = async () => {
  execSync('cp public/* build/')
}

async function build() {
  execSync('rm -rf build/')
  execSync('mkdir build')
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
    outfile: 'build/bundle.js',
    loader: {
      '.tsv': 'text'
    },
    define: {
      NODE_ENV: process.env.NODE_ENV,
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'process.env.REACT_APP_BUILD_TIME': `"${date}"`,
      'process.env.RUN_ENV': `undefined`,
      'process.env.DRAGGABLE_DEBUG': `undefined`
    },
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    },
    plugins: [lessLoader({ javascriptEnabled: true })]
  })
  const result = await ctx.rebuild?.()
  let text = result.metafile && (await esbuild.analyzeMetafile(result.metafile))
  console.log(text)
  console.timeEnd('build')

  if (isWatch) {
    const chokidar = require('chokidar')
    chokidar.watch('public', { ignoreInitial: true }).on('all', () => {
      synchPublic()
    })
    let { host, port } = await ctx.serve({
      servedir: 'build'
    })
    console.log(`Serving to http://${host}:${port}`)
  } else {
    ctx.dispose()
  }
}

build()
