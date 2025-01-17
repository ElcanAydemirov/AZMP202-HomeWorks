const ProductModel = require("../models/productModels")

const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        if (!products) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(deletedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const editWithPut = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const post = async (req, res) => {
    console.log(req.body);
    try {
        const newProduct = await ProductModel.create(req.body);
        newProduct.save()
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAll,
    getById,
    post,
    editWithPut,
    deleteById
};