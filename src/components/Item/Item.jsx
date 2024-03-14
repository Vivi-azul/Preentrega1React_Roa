const Item = ( { nombre, categoria, precio, img } ) => {
    return (
        <article>
            <h4>Categoria {categoria}</h4>
            <h3> {nombre} </h3>
            <img src={img} />
            <h4>${precio}</h4>
            <a>Ver Detalle</a>
        </article>
    )
}

export default Item