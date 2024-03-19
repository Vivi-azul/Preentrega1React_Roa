import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts, getProductByCategoria } from "../../asyncMock"

const ItemDetailContainer = () => {
    cont [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const productsData = await getProducts();
            setProducts(productsData);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);
    
      return (
        <div>
          <h2>Lista de Productos</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.img} alt={product.nombre} />
                <p>{product.nombre}</p>
                <p>Precio: ${product.Precio}</p>
                <p>Stock: {product.stock}</p>
                </li>
            ))}
          </ul>
        </div>
      );
    };



export default ItemDetailContainer