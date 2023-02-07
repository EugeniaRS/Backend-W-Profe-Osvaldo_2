import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import dv from "./db/db.js"
import mysql from " myslq2"
console.log('File')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)

app.listen(8080, () => {
    console.log("servidor ok")
})