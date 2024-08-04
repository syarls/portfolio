import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar/navbar'
import Hero from './assets/Components/Hero/hero'
import Circle from './assets/Components/Circle/circle'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Circle/> 
   <Navbar/>
  <Hero/>
  
 

  

   </>
  )
}

export default App
