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
const editUser = async(req, res)=>{
    try {
        const id = req.params.id
        const userFind = await Usuarios.findById(id)
        if(userFind){
            const userEdit = {
                nombre: req.body.nombre,
                email:  req.body.email,
                password:  req.body.password,
                isDeleted: false
            }
            const user = await Usuarios.findByIdAndUpdate(id, userEdit)
            res.status(200).send({ mensaje: "Usuario modificado con exito", usuario: userEdit })
        }else{
            res.status(400).send({ mensaje: "Usuario no encontrado" })
        }
    } catch (error) {
        res.send(error)
    }
}

// Eliminar un usuario fisica o logicamente
const deleteUser = async(req, res)=>{
    try {
        const id = req.params.id
        const isLogicalDelete = req.body.logical || false
        const userFind = await Usuarios.findById(id)
        if(userFind){
            if(isLogicalDelete){
                userFind.isDeleted = true
                userFind.save()
                return res.status(200).send({ mensaje: "Usuario eliminado de manera logica", usuario: userFind })
            }
            const user = await Usuarios.findByIdAndDelete(id)
            res.status(200).send({ mensaje: "Usuario eliminado con exito", usuario: userFind })
        }else{
            res.status(400).send({ mensaje: "Usuario no encontrado" })
        }
    } catch (error) {
        res.send(error)
    }
}

// resetear contraseña
const resetPassword = async(req, res)=>{
    try {
        const email = req.body.email
        let userFind = Usuarios.findOne({email})
        if(userFind){
            const password = req.body.password
            const salt = bcrypt.genSaltSync(10);
            const passwordHash = bcrypt.hashSync(password, salt);
            userFind.password = passwordHash
            userFind.save()
            res.status(200).send({ mensaje: "Contraseña reseteada con exito" })
        }else{
            res.status(400).send({ mensaje: "Usuario no encontrado" })
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    editUser,
    resetPassword,
    deleteUser
}