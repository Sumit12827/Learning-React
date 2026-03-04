import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

let myObj = {
  username : "sumit", 
  age: 21
}
let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
      <Card  username  = "chai or sumit"   />
      <Card />
    </>
  )
}

export default App
