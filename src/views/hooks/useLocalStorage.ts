import { useCallback, useMemo } from 'react'

export const useLocalStorage = () => {
  const getLSValue = useCallback((key: string, withParse = true) => {
    const item = localStorage.getItem(key) || ''
    return withParse && item ? JSON.parse(item) : item
  }, [])

  const setPreviousePage = useCallback((pathname: string) => {
    localStorage.setItem('loginFrom', pathname)
  }, [])

  return useMemo(
    () => ({
      getLSValue,
      setPreviousePage,
    }),
    [getLSValue, setPreviousePage]
  )
}
