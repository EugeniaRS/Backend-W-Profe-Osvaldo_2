import { Router } from "express";
import { nextTick } from "process";
import { isUser } from "../utils/middleware.js";

const categoryRoutes = Router()

categoryRoutes.get("/", (req, res) => {
    res.send("getAllCategories")
})
categoryRoutes.get("/:id", (req, res) => {
    res.send({ getlCategoryById: req.params.id })
})

categoryRoutes.use(isUser)

categoryRoutes.post("/", (req, res) => {
    const { name } = req.body
    const query = `INSERT INTO category(name) VALUES("${name}")`
    db.query(query, (err, result, fields) => {
        if (err) return nextTick(err)
        res.status(201).send({ messages: "categoria creado con exito", success: true })
    })
    res.send("createCategory")
})

categoryRoutes.put("/", (req, res) => {
    res.send("updateCategory")
})

categoryRoutes.delete("/", (req, res) => {
    res.send("deleteCategory")
})

export default categoryRoutes