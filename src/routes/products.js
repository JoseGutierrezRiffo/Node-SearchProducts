import express from "express";
import connection from "../database/db";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Api Search Products");
});

router.get("/search", (req, res) => {
  connection.query(
    "SELECT * FROM cuponatic. `datos_descuentos_buscador_prueba.2.0`",
    function(err, results, fields) {
      res.json(results);
    }
  );
});

router.post("/search/:keyword", (req, res) => {
  const { keyword } = req.params;
  connection.query(
    "SELECT * FROM cuponatic.`datos_descuentos_buscador_prueba.2.0` WHERE `titulo` LIKE '%" +
      keyword +
      "%'",
    function(err, results, fields) {
      console.log(keyword);
      res.json(results);
    }
  );
});

export default router;
