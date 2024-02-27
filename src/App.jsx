import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import React from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Navbar title="*Tiendita V + L*"/>
      <h1>Miau..Guau</h1>
      {React.createElement('p', {}, 'Proximamente encontraras lo que necesites')}
      
    </div>
  )
}

export default App
