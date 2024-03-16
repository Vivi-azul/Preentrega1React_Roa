const products = [ 
    {
        id: '1',
        nombre: 'DogChow',
        Precio: 2500,
        Categoria: Perro,
        img: 'https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.novapet.cl%2Fproduct%2Fpurina-dog-chow-adultos-carne-y-pollo-18kg&psig=AOvVaw2nj2sficfAzG-ggOhWRh0Y&ust=1710468149987000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJj2t6_U8oQDFQAAAAAdAAAAABAE',
        stock: 20,
        Descripción: 'Formulado con los nutrientes e ingredientes de calidad que lo ayudarán a tener salud y vitalidad por muchos más años.'
    },
    {
        id: '2',
        nombre: 'Whiskas',
        Precio: 3100,
        Categoria: Gato,
        img: 'https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.whiskas.cl%2Fnuestros-productos%2Falimento-seco%2Fwhiskas-alimento-seco-para-gatos-adultos-carne&psig=AOvVaw3JiVwJ7VQlTcoFCS1ujzZT&ust=1710468431684000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjR8rPV8oQDFQAAAAAdAAAAABAE',
        stock: 20,
        descripción: 'Preparada para satisfacer las necesidades nutricionales de su gatoAlimento para gatos 100% completo y balanceadoFibras múltiples apoyan el funcionamiento gastrointestinal, contribuyendo a la formación de heces firmes y fáciles de limpiar.'
    },
    {
        id: '3',
        nombre: 'Juguetes',
        precio: 5000,
        categoria: 'Juguetes',
        img: 'https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-timdt&psig=AOvVaw3VQxHd4j46xWdkQTXScNTV&ust=1710468711028000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDzlbnW8oQDFQAAAAAdAAAAABAI',
        stock: 16,
        descripción: 'Diversos Juguetes para perritos y gatitos'
    },
 ]

 export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products)
          }, 400)
    })
        
 }

 export const getProductByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoriaId))
        }, 1000)
    })
 }
