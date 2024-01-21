import express from "express";
import conn from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from users WHERE email = ? AND password = ?";
  conn.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie('token', token)
      return res.json({ loginStatus: true });
    } else {
        return res.json({ loginStatus: false, Error:"wrong email or password" });
    }
  });
});



router.get("/coffee", (req, res) => {
  const query = "SELECT * FROM coffees"
  conn.query(query, (error, result) => {
    if(error){return res.json(error)}
    return res.json(result)
  })
})

router.get("/users", (req, res) => {
  const query = "SELECT * FROM users"
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




router.get("/logout", (req, res) => {
  res.clearCookie("token")
  return res.json({Status: true})
})

export { router as adminRouter };