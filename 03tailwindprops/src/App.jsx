import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myobj={
    username:"Ashutosh",
    age:22
  }

  let arr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card username="Ashutosh" btntext="Visit me" />
      <Card username="Saurabh" />
    </>
  )
}

export default App
