const Productos = require("../model/product.model")

const getProducts = (req, res)=>{
    Productos.find()
    .then( productos => {
        res.send(productos) 
    })
    .catch((error)=>{
        res.send(error)
    })
}

const getProductById = (req, res)=>{
    let id = req.params.id
    Productos.findById(id)
    .then( producto => {
        res.send(producto)
    })
    .catch( error => {
        res.send(error)
    })
}

const editProduct = (req, res)=>{
    let id = req.params.id
    const productoEditado = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }
    Productos.findByIdAndUpdate(id,productoEditado)
    .then( producto => {
        res.send({
            producto, 
            mensaje: "Producto modificado con exito"
        })
    })
}

const createProduct = (req, res)=>{
    const nuevoProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }

    Productos.create(nuevoProducto)
    .then(producto =>{
        res.send({mensaje: "Producto creado con exito", producto: nuevoProducto})
    })
    .catch(error =>{
        res.send(error)
    })
    
}

const deleteProduct = (req, res)=>{
    let id = req.params.id;
    Productos.findByIdAndDelete(id)
    .then(producto =>{
        res.send({mensaje: "Producto eliminado con exito", producto: producto})
    })
    .catch(error =>{
        res.send(error)
    })
}

module.exports = {
    getProducts,
    getProductById,
    editProduct,
    createProduct,
    deleteProduct
}