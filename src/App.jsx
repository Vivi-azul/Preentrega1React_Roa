import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <Navbar title="*Tiendita V + L*"/>
      <ItemListContainer greeting={'Miau..Guau'} />
      {/* <h1>Miau..Guau</h1> */}
      {React.createElement('p', {}, 'Proximamente encontraras lo que necesites')}
      <ItemCount stock={12}/>
    </div>

  )
}

export default App
