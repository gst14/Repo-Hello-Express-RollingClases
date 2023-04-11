const express = require('express');
const app = express();
require('dotenv').config();
const productRoutes = require('./routes/products.routes')
const PORT = process.env.PORT || 8080
const cors = require('cors');
const { initDBConnection } = require('./database/dbConnection');

app.use(express.json())
app.use(cors())
app.get('/', (req, res)=>{
    res.send({ mensaje: "Hola humano" })
})

app.use("/productos", productRoutes)


app.listen(PORT, ()=>{
    initDBConnection();
    console.log(`Escuchando en puerto ${PORT}`)
})