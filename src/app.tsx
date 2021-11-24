import './app.css'
import UseMountDemo from './hooks/use-mount/demo/demo1'
import UseUnmountDemo from './hooks/use-unmount/demo/demo1'
import UseMountEffectDemo from './hooks/use-mount-effect/demo/demo1'

function App() {
  return (
    <div className="app">
      <h2>oc-hooks</h2>
      <UseMountDemo />
      <br />
      <UseUnmountDemo />
      <br />
      <UseMountEffectDemo />
    </div>
  )
}

export default App
