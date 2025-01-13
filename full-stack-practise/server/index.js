const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const { Schema, model } = mongoose;

const PORT = 3000;

app.use(cors());
app.use(express.json());

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

const Product = model("Product", productSchema);

mongoose
    .connect("mongodb+srv://elcansaazmp202:bx1.2005@cluster0.83ybn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0", {

    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

app.get("/api/products", async(req, res) => {
    console.log(Product);
    const products = await Product.find({})
    res.status(200).send(products)
});

app.get("/api/products/:id", async(req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    if (product) {
        res.status(200).send(product)
        return
    }
    res.status(500).send({
        message:"error"
    })
});

app.delete("/api/products/:id", async(req, res) => {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    const products = await Product.find({})
    if (product) {
        res.status(200).send({
            deletedProduct:product,
            allProducts:products
        }
        )
        return
    }
    res.status(500).send({
        message:"error"
    })
});


app.post("/api/products", async(req, res) => {
    const product = await Product.findByIdAndDelete(id)
    if (product) {
        res.status(200).send({
            deletedProduct:product,
            allProducts:products
        }
        )
        return
    }
    res.status(500).send({
        message:"error"
    })
});

// app.get("/api", (req, res) => {
//     res.send("API is working!");
// });

// app.get("/api", (req, res) => {
//     res.send("API is working!");
// });

// app.get("/api", (req, res) => {
//     res.send("API is working!");
// });