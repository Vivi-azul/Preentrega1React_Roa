import { useState } from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
   const [ count, setCount ] = useState(initial)
   const decrement = ( ) => {
    if(count > 1) {
        setCount(prev => prev - 1)
    }
   
   }

   const increment = () => {
    if(count < stock) {
        setCount(prev => prev + 1)
    }
   }

   
       return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>Quitar del Carrito</button>
            <button onClick={() => onAdd(count)}>Carrito</button>
            <button onClick={increment}>Agregar al Carrito</button>
        </article>
    )
}

export default ItemCount