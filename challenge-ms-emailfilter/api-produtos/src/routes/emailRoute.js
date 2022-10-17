const { Router } = require("express");
const router = Router();
const controller = require("../controllers/emailController");

router.get("/", controller.get);

module.exports = router;
