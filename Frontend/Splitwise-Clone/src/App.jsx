import { useState } from 'react'

import './App.css'
import LoginSignup from '../src/pages/LoginSignup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginSignup/>
    </>
  )
}

export default App
