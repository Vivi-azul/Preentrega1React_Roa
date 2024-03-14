import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <section>
            {
                products.map(products => {
                    return <Item key={products.id} {products.nombre} {products.Precio} />
                })
            }
        </section>
    )
}

export default ItemList