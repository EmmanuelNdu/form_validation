import { useState } from 'react'
import './App.css'
import FormWithout from './components/FormWithout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormWithout />
    </>
  )
}

export default App
