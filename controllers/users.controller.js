const Usuarios = require("../model/user.model")

// Obtener todos los usuarios
const getUsers = async(req, res)=>{
    try {
        const usuarios = await Usuarios.find()
        res.send(usuarios)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Obtener un usuario por ID

const getUserById = async(req, res)=>{
    try {
        const id = req.params.id
        const usuario = await Usuarios.findById(id)
        res.send(usuario)
    } catch (error) {
        res.status(404).send(error)
    }
}
// Crear usuario
const createUser = async(req, res)=>{
    try {
        const newUser = {
            nombre: req.body.nombre,
            email:  req.body.email,
            password:  req.body.password,
            isDeleted: false
        }
        const user = Usuarios.create(newUser)
        res.status(201).send({ mensaje: "Usuario creado con exito", usuario: newUser })
        
    } catch (error) {
        res.status(404).send(error)
    }
}

// Obtener un usuario por mail

// Modificar un usuario

// Eliminar un usuario

module.exports = {
    getUsers,
    getUserById,
    createUser
}