import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(5)               
  
  //let counter=5

  const addvalue=()=>{
    //counter=counter+1
    setCounter(counter+1)
  }

  const subvalue=()=>{
    //counter=counter-1
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addvalue}
     >Add Value:{counter}</button>
     <br/>
     <button onClick={subvalue}
     >Sub Value:{counter}</button>
    </>
  )
}

export default App

//useState () hook -> This hook is responsible to change the state means the change is propogated to the UI or DOM
//change doesn't mean it changes the value
//setCounter is a method which is used to control the variable 'Counter'. It will update the variable wherever it is used 