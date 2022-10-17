const { Router } = require("express");
const router = Router();
const controller = require("../controllers/productController");

router.get("/", controller.get);

router.post("/", controller.post);

router.put("/:sku", controller.put);

router.delete("/:sku", controller.delete);

module.exports = router;
