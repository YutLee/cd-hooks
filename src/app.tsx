import './app.css'
import UseMountDemo from './use-mount/demo/demo1'
import UseUnmountDemo from './use-unmount/demo/demo1'
import UseMountEffectDemo from './use-mount-effect/demo/demo1'
import UseFetchDemo from './use-fetch/demo/demo1'
import UseScrollDemo from './use-scroll/demo/demo1'

function App() {
  return (
    <div className="app">
      <h2>cd-hooks</h2>
      <UseMountDemo />
      <br />
      <UseUnmountDemo />
      <br />
      <UseMountEffectDemo />
      <br />
      <UseFetchDemo />
      <br />
      <UseScrollDemo />
    </div>
  )
}

export default App
