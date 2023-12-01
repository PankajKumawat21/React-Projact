import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './components/card'
function App() {
  const [count, setCount] = useState(0)


  function App (){
    const [count,setCount] = useState(0)
    let myObj = {
      username: "pankaj",
      age: 21
    }
  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
<card channel="lenovo" someObje={myObj}/>
<card/>
    
    </>
  )
}

export default App
