import { useState, useEffect } from 'react'

const getHashParams = () => {
  const hash = window.location.hash.slice(1)
  return new URLSearchParams(hash)
}

const setFullHash = (hash: string) => {
  const currentHash = window.location.hash.slice(1)
  if (hash !== currentHash) {
    window.location.replace(`${window.location.pathname}#${hash}`)
  }
}
export const setHashFromObject = (
  record: Record<string, string | undefined>
) => {
  const cleanRecord = Object.fromEntries(
    Object.entries(record).filter(([, val]) => val !== undefined)
  ) as Record<string, string>
  const hashParams = new URLSearchParams(cleanRecord)
  return setFullHash(hashParams.toString())
}
export const setHashParam = (key: string, value: string | undefined) => {
  const hashParams = getHashParams()
  if (value === undefined) {
    hashParams.delete(key)
  } else {
    hashParams.set(key, value)
  }
  setFullHash(hashParams.toString())
}

export const useHashParams = () => {
  const [hashParams, setHashParams] = useState<URLSearchParams>(
    new URLSearchParams(window.location.hash.slice(1))
  )
  useEffect(() => {
    const handleHashChange = () => {
      setHashParams(getHashParams())
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return Object.fromEntries(hashParams.entries())
}
