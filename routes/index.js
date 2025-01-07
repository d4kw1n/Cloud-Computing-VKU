const router = require("express").Router();
const productRoute = require("./productRoute");

router.use("/product", productRoute);

module.exports = router;