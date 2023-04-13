const Router = require('express');
const { getUsers, getUserById, createUser } = require('../controllers/users.controller');
const router = Router()

router.get('/', getUsers)

router.get('/:id', getUserById)

// router.put('/:id', editProduct)

router.post("/", createUser)

// router.delete("/:id", deleteProduct)

module.exports = {
    userRoutes: router
};