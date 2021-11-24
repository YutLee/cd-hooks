import { useState } from 'react'
import useMount from '..'

function Demo () {
  useMount(() => {
    console.log('mount')
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
