import { useState } from 'react'
import useUnmount from '..'

function Demo () {
  useUnmount(() => {
    console.log('unmount')
  })

  return <p>Hello!</p>
}

export default () => {
  const [state, setState] = useState(true)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      <button onClick={handleClick}>{state ? 'unmount' : 'mount'}</button>
      {state && <Demo />}
    </>
  )
}
