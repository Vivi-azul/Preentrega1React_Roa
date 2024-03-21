import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts, getProductByCategoria, getProductsBydescripción } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    cont [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
      getProductById(itemId)
        .then(result => {
          setProduct(result)
        })
    }, [itemId])

    return (
      <main>
        <h1>Detalle de los Porductos</h1>
        <ItemDetail {...product} />
      </main>
    )
    }
  //      <div>
  //        <h2>Lista de Productos</h2>
  //        <ul>
  //          {products.map(product => (
  //            <li key={product.id}>
  //              <img src={product.img} alt={product.nombre} />
  //              <p>{product.nombre}</p>
  //              <p>Precio: ${product.Precio}</p>
  //              <p>Stock: {product.stock}</p>
  //              </li>
  //          ))}
  //        </ul>
  //      </div>
  //    );
  //  };


export default ItemDetailContainer