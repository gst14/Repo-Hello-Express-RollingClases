const productos = [
    {
        id: "yd6vo1",
        nombre: "Coca Cola",
        precio: 100,
        stock: 10
    },
    {
        id: "xcd3bx5",
        nombre: "Pepsi",
        precio: 100,
        stock: 10
    },
    {
        id: "q16e8se",
        nombre: "Fanta",
        precio: 100,
        stock: 10
    },
    {
        id: "7u63j6n",
        nombre: "Sprite",
        precio: 100,
        stock: 10
    }
]

const getProducts = (req, res)=>{
    res.send(productos)
}

const getProductById = (req, res)=>{
    let id = req.params.id
    let producto = productos.find( producto=> producto.id == id )
    if(producto){
        res.send(producto)
    }else{
        res.send({
            error: "El producto no existe"
        })
    }
}

const editProduct = (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id )
    producto.nombre = req.body.nombre;
    producto.precio = req.body.precio;
    producto.stock = req.body.stock;
    res.send({producto, mensaje: "Producto modificado con exito"})
}

const createProduct = (req, res)=>{
    const nuevoProducto = {
        id: Math.random().toString(36).substring(2, 9),
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }

    productos.push(nuevoProducto)
    res.send({mensaje: "Producto creado con exito", producto: nuevoProducto})
}

const deleteProduct = (req, res)=>{
    let id = req.params.id;
    let producto = productos.find( producto => producto.id == id )
    let index = productos.indexOf(producto)
    productos.splice(index, 1)
    res.send({mensaje: "Producto eliminado con exito", producto: producto})
}

module.exports = {
    getProducts,
    getProductById,
    editProduct,
    createProduct,
    deleteProduct
}