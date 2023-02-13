//De esta forma se requiere el modulo  HTTP nativo de node
//import http from "http";
// La constante serverApp va estar ejecutando lo que me esta trayendo este modulo http
//esta funcion crea el servidor
//const serverApp = http.createServer((peticion, respuesta) => {
//peticion:esto es todo lo le voy a estar enviando ami servidor, un Psot ..ect . va tener forma de objeto
//respuesta: es lo que devuelve (HTTP STATUS CODE)
//respuesta.end("Hola mundo")
//});
//escucha un puerto 
/* const server = serverApp.listen(8080, () => {
    console.log('servidor ok')
}) */

//--------------Express-------------
//pern= postgrest(sql),express, react, node

import express from 'express'
// esta constante me va traer todo los metodos de express
const app = express();

// ------Middleware----
// poder utlizar un midlewear tengo que utilizar el metodo use()

app.use(express.urlencoded({ extended: true }))




//app me viene cargado con unmetodo get 
//primer parametro es pasar la url y despues la funcion callback
//tambien acepta un tercer parametro llamado next

app.get("/", (peticion, respuesta) => {
        /* 
            console.log('asknjasf', peticion) */
        // paso una respuesta
        /*    respuesta.send({
               data: "Hola team"
           }) */

        respuesta.status(202).send('getall')
    })
    //pasar por id
    //Son peticines que se generan atravez de la url
app.get("/:id", (req, res) => {
    console.log('RESSSPP', req.params)
    res.status(200).send({ type: "getById", params: req.params })
})

app.post("/", (req, res) => {
    const body = req.body
    res.status(200).send({
        type: "post",
        message: body
    })
})

app.listen(8080, () => {
    console.log('Me levante ok...')
})