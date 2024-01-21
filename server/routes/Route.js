import express from "express";
import conn from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();


router.get("/coffee", (req, res) => {
    const query = "SELECT * FROM coffees"
    conn.query(query, (error, result) => {
        if(error){return res.json(error)}
        return res.json(result)
    })
})

router.get("/reviews", (req, res) => {
    const query = "SELECT * FROM reviews"
    conn.query(query, (error, result) => {
        if(error){return res.json(error)}
        return res.json(result)
    })
})

export {router as route}