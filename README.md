# cd-hooks
Some react hooks

## useMount
```
useMount(() => {
  console.log('mount')
})
```

## useUnmount
```
useUnmount(() => {
  console.log('unmount')
})
```

## useMountEffect
```
useMountEffect(() => {
  console.log('mount')
}, () => {
  console.log('unmount')
})
```

## useFetch
```
const one = useFetch(getData) // 单个请求
const multi = useFetch([getData, getUsersDefunkt]) // 多个请求
const parallel = useFetch([getData, getUsersDefunkt], { parallel: true }) // 并行请求
```

### API
```
const {
  loading: boolean,
  data?: any,
  error?: Error,
  params: any,
  run: (...params: any) => void
} = useFetch(
  service: (...args: any) => Promise<TData>,
  {
    auto?: boolean,
    parallel?: boolean,
    params?: any,
    onBefore?: (params: any) => void,
    onSuccess?: (data: any, params: any) => void,
    onError?: (err: Error, params: any) => void,
    onFinally?: (params: any, data?: any, err?: Error) => void
  }
)
```
