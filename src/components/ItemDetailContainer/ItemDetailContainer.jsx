import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    cont [getProductById, setProduct] = useState(null)

    useEffect(() => {
        getProductById('2')
        .then(result => {
            setProduct(result)

        })

    }, [])

    return (
        <main>
            <h1>Detalle de producto</h1>{
            <ItemDetail { ...product} />
            }
        </main>
    )
}

export default ItemDetailContainer