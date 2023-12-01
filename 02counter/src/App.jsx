import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setcounter] =useState(15)


//let Counter =5
const addvalue = () => {
  console.log("clicked",Counter + 1);
 Counter = Counter + 1
 setcounter(Counter)
}
const removevalue =() =>{
  setcounter(Counter - 1)
}
  return (
    <>
      <h1>Counter Aur React</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={addvalue}>Add value {Counter}</button>
      <br/>
      <button onClick={removevalue}>Decrease value {Counter}</button>
      <p>footer {Counter}</p>
      
    </>
  )
}

export default App
