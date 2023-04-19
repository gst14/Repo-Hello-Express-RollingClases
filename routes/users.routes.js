const Router = require('express');
const { getUsers, getUserById, createUser, loginUser, resetPassword, editUser, deleteUser } = require('../controllers/users.controller');
const router = Router()
const { body } = require('express-validator');
const { validateErrors } = require('../middlewares/validateErrors');

router.get('/', getUsers)

router.get('/:id', getUserById)

router.put('/:id'
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('nombre').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('La contraseña debe tener al menos una mayúscula, una minúscula y un número'),
    validateErrors
],
editUser)

router.post("/"
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('nombre').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('La contraseña debe tener al menos una mayúscula, una minúscula y un número'),
    validateErrors
]
,createUser)

router.delete("/:id", deleteUser)

router.post("/login"
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    validateErrors
]
,loginUser)

router.post("/reset-password"
,[
    body('email').isEmail().withMessage('El email debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    validateErrors
]
,resetPassword)

module.exports = {
    userRoutes: router
};