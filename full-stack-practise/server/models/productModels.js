const mongoose = require("mongoose")
const { Schema, model } = mongoose

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
}, { timestamps: true, versionKey: false });

const ProductModel = model("products", productSchema);

module.exports = ProductModel