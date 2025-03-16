import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginMain from './Components/LoginMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginMain/>
    </>
  )
}

export default App
