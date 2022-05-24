const express = require("express");

const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.main);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

module.exports = router;

// const express = require("express");

// const mainController = require("../controllers/mainController");

// const router = express.Router();

// router.get("/", mainController.index);
// router.get("/carrito", mainController.carrito);
// router.get("/login", mainController.login);
// router.get("/productDetail", mainController.productDetail);
// router.get("/registro", mainController.registro);

// module.exports = router;