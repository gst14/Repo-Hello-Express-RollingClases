const express = require('express');
const app = express();
require('dotenv').config();
const productRoutes = require('./routes/products.routes')
const PORT = process.env.PORT || 8080

app.use(express.json())
// req =>  request (peticion)
// res => response (respuesta) 
// GET - Obtener algo (un recurso o varios)
app.get('/', (req, res)=>{
    res.send({ mensaje: "Hola humano" })
})

app.use("/productos", productRoutes)


app.listen(PORT, ()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})