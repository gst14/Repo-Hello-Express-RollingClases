const { Schema, model } = require("mongoose")

const productSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
    }
})

module.exports = model('Producto', productSchema)