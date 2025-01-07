const route = require("express").Router();
const productController = require("../controller/product");
const upload = require("../middlewares/upload");

route.get("/products", productController.getProducts);
route.get("/products/:id", productController.getProduct);
route.post("/products", upload.single("image"), productController.createProduct);
route.put("/products/:id", upload.single("image"), productController.updateProduct);
route.delete("/products/:id", productController.deleteProduct);

module.exports = route;