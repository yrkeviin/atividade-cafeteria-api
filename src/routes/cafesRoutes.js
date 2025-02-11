const express = require("express");
const router = express.Router();
const cafesController = require("../controllers/cafesController");

router.get("/menu", cafesController.getCafes);
router.post("/order", cafesController.addCafe);
router.get("/order/:id", cafesController.buscarCafe);
router.delete("/order/:id", cafesController.deleteCafe);

module.exports = router;
