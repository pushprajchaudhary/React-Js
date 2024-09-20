import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div style={{ 'margin': 'auto', width: '50%', padding: '10px', border: '3px solid green', display: 'block' }}>
          <button onClick={() => setCount((count) => {
            count + 1;
            count + 1;
            count + 1;
            count + 1
            })}> + </button>
          <label style={{ 'padding': '10px 10px' }}>{count}</label>
          <button onClick={() => setCount((count) => count - 1)}> - </button>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
