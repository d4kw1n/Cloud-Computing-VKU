const Product = require('../models/product');

const ProductController = {
    createProduct: async (req, res) => {
        try {
            const { name, price, description } = req.body;
            const product = new Product({
                name,
                price,
                description
            });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, price, description } = req.body;
            const product = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            await Product.findByIdAndDelete(id);
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ProductController;