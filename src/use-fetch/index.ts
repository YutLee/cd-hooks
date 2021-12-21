import { useRef, useState } from 'react'
import { useMountEffect } from '..'

type Service = (arg?: any) => any
type Services = Array<Service>
interface Result {
  loading: boolean
  data: any
  error: Error
}

const useService = (services: Service | Services, options?: any) => {
  const multi = Array.isArray(services)
  const servicesRef = useRef(multi ? services : [services])
  // @ts-ignore
  const initState: Result = { loading: false }

  const [state, setState] = useState(initState)

  const run = (params?: any) => {
    setState(prevState => ({
      ...prevState,
      loading: true
    }))

    options.onBefore?.(state, params)

    const onSuccess = (data: any) => {
      setState(prevState => ({
        ...prevState,
        loading: false,
        data
      }))

      options.onSuccess?.(data, params)
      options.onFinally?.(params, data)
    }

    const onError = (error: Error) => {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error
      }))

      options.onError?.(error, params)
      options.onFinally?.(params, error)
    }

    const datas: Array<any> = []
    const next = (services: Array<Service>, idx: number) => {
      services[idx](Array.isArray(params) ? params[idx] : params)
        .then((data: any) => {
          datas.push(data)
          if (datas.length < services.length) {
            next(services, idx + 1)
          } else {
            if (datas.length === 1) {
              onSuccess(datas[0])
            } else {
              onSuccess(datas)
            }
          }
        }).catch((error: Error) => {
          onError(error)
        })
    }

    if (options.parallel) {
      Promise.all(servicesRef.current.map((item, idx) => item(Array.isArray(params) ? params[idx] : params)))
        .then(values => {
          onSuccess(values)
        }).catch(error => {
          onError(error)
        })
    } else {
      next(servicesRef.current, 0)
    }
  }

  return {
    ...state,
    run
  }
}

const useFetch = (services: Service | Services, options?: any) => {
  const controllerRef = useRef(new AbortController())
  const { current = {} } = useRef(options)
  const { run, ...rest } = useService(services, current)

  useMountEffect(() => {
    if (current.auto) {
      run(current.params)
    }
  }, () => {
    controllerRef.current.abort()
  })

  return {
    run,
    ...rest
  }
}

export default useFetch
