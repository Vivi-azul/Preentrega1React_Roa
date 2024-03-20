const Item = ({ nombre, categoria, precio, img, descripción }) => {
    return (
        <article>
            <h4>Categoria: {categoria}</h4>
            <h3>{nombre}</h3>
            <img src={img} style={{ width: 100}} />
            <h4>${precio}</h4>
            <a>Ver Detalle</a>
        </article>
    )
}

export default Item