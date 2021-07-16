const express = require("express");
const router = express.Router();

const { promisePool } = require("../database/db.connect");

router.get("/", async (req, res) => {
  try {
    let sql = `SELECT * FROM MESSAGE`;
    const [rows, fields] = await promisePool.query(sql);
    if (rows.affectedRows > 0) console.log("success");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:storeId", async (req, res) => {
  try {
    let sql = req.params.storeId
      ? `SELECT * FROM MESSAGE WHERE storeId = ${req.params.storeId}`
      : `SELECT * FROM MESSAGE`;
    const [rows, fields] = await promisePool.query(sql);
    if (rows.affectedRows > 0) console.log("success");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
