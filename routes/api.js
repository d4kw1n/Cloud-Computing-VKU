const route = require('express').Router();
const productController = require('../controller/product');

route.post('/create', productController.createProduct);
route.get('/list', productController.getProducts);
route.get('/detail/:id', productController.getProduct);
route.put('/update/:id', productController.updateProduct);
route.delete('/delete/:id', productController.deleteProduct);
route.get('/search', productController.searchProduct);

module.exports = route;