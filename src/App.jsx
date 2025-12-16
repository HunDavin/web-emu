import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TerminalUi } from './components/TerminalUi'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-screen h-screen'>
    <TerminalUi /> 
  </div>
  )
}

export default App
