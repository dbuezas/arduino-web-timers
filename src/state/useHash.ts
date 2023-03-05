import { debounce } from 'lodash-es'
import { useState, useEffect } from 'preact/compat'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

let lock = false

export const setHashFromObject = debounce(
  // debounced to avoid chrome throttling
  async (record: Record<string, string | undefined>) => {
    const cleanRecord = Object.fromEntries(
      Object.entries(record).filter(([, val]) => val !== undefined)
    ) as Record<string, string>
    const newHash = new URLSearchParams(cleanRecord).toString()
    lock = true
    window.location.replace(`${window.location.pathname}#${newHash}`)
    await sleep(0)
    lock = false
  },
  100,
  { leading: false, trailing: true, maxWait: 100 }
)

export const getHashParams = () => {
  const hash = window.location.hash.slice(1)
  return new URLSearchParams(hash)
}

export const useHashChangedExternally = () => {
  const [state, setState] = useState<URLSearchParams>(getHashParams())
  useEffect(() => {
    const handleHashChange = () => {
      if (!lock) setState(getHashParams())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return Object.fromEntries(state.entries())
}
