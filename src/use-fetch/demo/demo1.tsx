import useFetch from '..'

export default () => {
  const getData = () => fetch('https://api.github.com').then(res => res.json())
  const getUsersDefunkt = () => fetch('https://api.github.com/users/defunkt').then(res => res.json())

  const one = useFetch(getData)
  const multi = useFetch([getData, getUsersDefunkt])
  const parallel = useFetch([getData, getUsersDefunkt], { parallel: true })

  return (
    <>
      <button onClick={() => one.run()}>fetch</button>
      <div>{one.loading ? 'loading...' : one.data && JSON.stringify(one.data)}</div>
      <button onClick={() => multi.run()}>fetch multi</button>
      <div>{multi.loading ? 'loading...' : multi.data && JSON.stringify(multi.data)}</div>
      <button onClick={() => parallel.run()}>fetch parallel</button>
      <div>{parallel.loading ? 'loading...' : parallel.data && JSON.stringify(parallel.data)}</div>
    </>
  )
}
