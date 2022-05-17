const express = require("express");

const registroController = require("../controllers/registroController");

const router = express.Router();

router.get("/", registroController.index);


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