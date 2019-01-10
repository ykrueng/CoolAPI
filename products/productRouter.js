const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET /products endpoint");
});

router.get("/:id", (req, res) => {
  res.send(`GET /products/${req.params.id} endpoint`);
});

module.exports = router;