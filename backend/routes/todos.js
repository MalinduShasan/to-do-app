import { Router } from "express";
import pool from "../db.js";

const router = Router();

//create a new to-do
router.post("/", async (req, res) => {
    try{
        const {description, completed} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING *",
            [description, completed || false]);
        res.json(newTodo.rows[0]);

    } catch (err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//get all to-dos
router.get("/", async (req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");

    }
});



export default router;