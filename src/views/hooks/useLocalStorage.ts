import { useCallback, useMemo } from 'react'

export const useLocalStorage = () => {
  const getLSValue = useCallback((key: string, withParse = true) => {
    const item = localStorage.getItem(key) || ''
    return withParse ? JSON.parse(item) : item
  }, [])

  return useMemo(
    () => ({
      getLSValue,
    }),
    [getLSValue]
  )
}
