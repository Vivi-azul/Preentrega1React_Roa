const Item = ({ nombre, categoria, precio, img }) => {
    return (
        <article>
            <h4>categoria: {categoria}</h4>
            <h3>{nombre}</h3>
            <img src={img} style={{ width: 100}} />
            <h4>${precio}</h4>
            <a>ver detalle</a>
        </article>
    )
}

export default Item