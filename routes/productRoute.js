const route = require("express").Router();
const productController = require("../controller/product");
const upload = require("../middlewares/upload");

route.get("/products", productController.index);
route.get("/products/:id", productController.show);
route.post("/products", upload.single("image"), productController.store);
route.put("/products/:id", upload.single("image"), productController.update);
route.delete("/products/:id", productController.destroy);

module.exports = route;