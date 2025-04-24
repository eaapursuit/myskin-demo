import './main.css'
import { useState } from 'react'
import HomePage from "./components/HomePage.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
