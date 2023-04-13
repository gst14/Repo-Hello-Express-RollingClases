const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    nombre: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    nacimiento: Date,
    isDeleted: Boolean
})

module.exports = model("Usuario", userSchema)