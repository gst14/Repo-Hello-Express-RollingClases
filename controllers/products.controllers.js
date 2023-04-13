const Productos = require("../model/product.model")

// async / await
// const getProducts = async () => {
//     try {
//         const response = await fetch('http://localhost:8080/productos/')
//         const json = await response.json()
//         console.log(json)
//     } catch (error) {
//         console.log(error)
//     }
// }

const getProducts = async (req, res) => {
    // Productos.find()
    // .then( productos => {
    //     res.send(c) 
    // })
    // .catch((error)=>{
    //     res.send(error)
    // })

    try {
        const productos = await Productos.find()
        if (productos.length > 0) {
            res.send(productos)
        } else {
            res.status(204).send(productos)
        }
    } catch (error) {
        res.send(error)
    }
}

const getProductById = async (req, res) => {
    let id = req.params.id
    // Productos.findById(id)
    // .then( producto => {
    //     res.send(producto)
    // })
    // .catch( error => {
    //     res.send(error)
    // })
    try {
        const products = await Productos.findById(id)
        res.send(products)
    } catch (error) {
        res.status(404).send(error)
    }
}

const editProduct = async (req, res) => {
    let id = req.params.id
    const productoEditado = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }
    // Productos.findByIdAndUpdate(id,productoEditado)
    // .then( producto => {
    //     res.send({
    //         producto, 
    //         mensaje: "Producto modificado con exito"
    //     })
    // })
    try {
        const producto = await Productos.findByIdAndUpdate(id, productoEditado)
        res.send({
            producto,
            mensaje: "Producto modificado con exito"
        })
    } catch (error) {
        res.status(404).send(error)
    }
}

const createProduct = async(req, res) => {
    const nuevoProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }

    // Productos.create(nuevoProducto)
    //     .then(producto => {
    //         res.send({ mensaje: "Producto creado con exito", producto: nuevoProducto })
    //     })
    //     .catch(error => {
    //         res.send(error)
    //     })
    try {
        const producto = await Productos.create(nuevoProducto)
        res.status(201).send({ mensaje: "Producto creado con exito", producto: nuevoProducto })
    } catch (error) {
        
    }
}

const deleteProduct = async(req, res) => {
    let id = req.params.id;
    // Productos.findByIdAndDelete(id)
    //     .then(producto => {
    //         res.send({ mensaje: "Producto eliminado con exito", producto: producto })
    //     })
    //     .catch(error => {
    //         res.send(error)
    //     })

    try {
        const producto = await Productos.findByIdAndDelete(id)
        res.send({ mensaje: "Producto eliminado con exito", producto: producto })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getProducts,
    getProductById,
    editProduct,
    createProduct,
    deleteProduct
}