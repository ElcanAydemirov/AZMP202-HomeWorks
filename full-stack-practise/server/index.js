const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');
const { getAll, getById, deleteById, editWithPut, post } = require("./controllers/productControllers");
const PORT = 3000;
const { Schema, model } = mongoose;
const productRouter = require("./routes/productRoutes")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://elcansaazmp202:bx1.2005@cluster0.83ybn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});

app.use('/api/products', productRouter);


