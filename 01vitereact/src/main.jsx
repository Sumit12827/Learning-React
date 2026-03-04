import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp() {
  return (
    <div>
      <h1>My App</h1>
    </div>  
  )
}


const anotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)
const anotheruser = "sumit and react"
const reactElement = React.createElement(
  'a' ,
 { href:"https://google.com" , target :  "_blank"},
  'click me to visit google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
  reactElement
)
