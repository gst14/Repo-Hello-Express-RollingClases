const Usuarios = require("../model/user.model")
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
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
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = {
            nombre: req.body.nombre,
            email:  req.body.email,
            password:  passwordHash,
            isDeleted: false
        }
        const user = Usuarios.create(newUser)
        res.status(201).send({ mensaje: "Usuario creado con exito", usuario: newUser })
        
    } catch (error) {
        res.status(404).send(error)
    }
}

// Login de usuario
const loginUser = async(req, res)=>{
    try {
        const email = req.body.email
        const userFind = await Usuarios.findOne({email})
        if(userFind){
            const passwordEnterByUser = req.body.password
            const passwordStoredInDB = userFind.password
            const passwordMatch = bcrypt.compareSync(passwordEnterByUser, passwordStoredInDB)
            if(passwordMatch){
                res.status(200).send({ mensaje: "Usuario logueado con exito", usuario: userFind })
            }else{
                res.status(400).send({ mensaje: "Contraseña incorrecta" })
            }
        }else{
            res.status(400).send({ mensaje: "Usuario no encontrado" })
        }
    } catch (error) {
        res.send(error)
    }
}

// Obtener un usuario por mail

// Modificar un usuario

// Eliminar un usuario

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser
}