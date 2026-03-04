import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(15)

//let counter = 15

const addValue = () => {
  //console.log("clicked" , counter);
  //counter = counter + 1
  setcounter(prevCounter => prevCounter + 1)
  setcounter(prevCounter => prevCounter + 1)    //for inter view purpose only 
}

const removeValue = () => {
  setcounter(counter -1)
}
  return (
    <>
     <h1>this is just an example for hooks  </h1>
     <h2>Counter values: {counter}</h2>

     <button
      onClick={addValue}
      >Add value {counter}
     </button>

     <br />

     <button onClick={removeValue}> remove value {counter}</button>
    </>
  )
}

export default App
