import { useEffect } from 'react'

const useMountEffect = (mount: () => void, unmount: () => void) => {
  useEffect(() => {
    mount?.()

    return () => {
      unmount?.()
    }
  }, [])
}

export default useMountEffect
