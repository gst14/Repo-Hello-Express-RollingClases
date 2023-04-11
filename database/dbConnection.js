const mongoose = require("mongoose")
require('dotenv').config();

const initDBConnection = ()=>{
    const DB_CONNECTION_STRING = process.env.DB_URL_CONNECTION;
    mongoose.set('strictQuery', false)
    mongoose.connect(DB_CONNECTION_STRING)
    .then(()=>{
        console.log('La base de datos se conecto correctamente')
    })
    .catch((error)=>{
        console.log("Error al conectar con la base de datos")
        console.log(error)
    })
}

module.exports = {
    initDBConnection
}