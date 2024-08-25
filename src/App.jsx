import { useState } from 'react';
import './App.css';
import Navbar from './assets/Components/Navbar/navbar';
import Hero from './assets/Components/Hero/hero';
import Circle from './assets/Components/Circle/circle';
import Chatbot from './assets/Components/Chatbot/chatbox';
// import Works from './assets/Components/Works/works';
import './index.css';

// const Container = styled.div`
//   height: 100vh;
//   scroll-snap-type: y mandatory;
//   scroll-behavior: SiWelcometothejungle;
//   overflow-y: auto;
//   scrollbar-width:none;
//   &::-webkit-scrollbar{

//   }
//   `
//   ;
  

function App() {

  return (
    
   <>
    <Circle/> 
   <Navbar/>
  <Hero/>
  {/* <Works/> */}
  <Chatbot/>
  
  
  
 

  

   </>
  )
}

export default App
