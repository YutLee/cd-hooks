import { useState } from 'react'
import useMountEffect from '..'

function Demo () {
  useMountEffect(() => {
    console.log('mount')
  }, () => {
    console.log('unmount')
  })

  return <p>Hello!</p>
}

export default () => {
  const [state, setState] = useState(false)

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
