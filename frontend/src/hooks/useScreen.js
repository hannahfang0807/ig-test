import { useEffect, useState } from 'react'

export const useScreen = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
      //console.log('updating width')
    }

    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return [width]
}
