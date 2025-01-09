const express = require('express')
const app = express()
const port = 8080
const { v4: uuidv4 } = require("uuid");
const cors = require('cors')
app.use(cors())
app.use(express.json());
const products=[
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing"
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket , light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. neckline includes a three-button plaque.",
      "category": "men's clothing"
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working , hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing"
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price" : 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing"
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery"
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave",
      "price": 168 ,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery"
    }
]




app.get('/products', (req, res) => {
    if (products.length>0) {
        res.status(200).send(
            {
                data: products,
                message: "succes"

            }
        )
    }
    else{
        res.status(204).send(
            {
                message:"data is empty"
            }
        )
    }
//   res.send('Hello World!')

})
app.get('/products/:id', (req, res) => {
    // res.send('Hello World!')
    const {id} = req.params
    const product = products.find((p)=> p.id == id)
    if (product!== undefined) {
        res.status(200).send(
            {
                data: product,
                message : "succes"
            }
        )
    } else {
        res.status(404).send(
            {
                message:"data is empty"
            }
        )
    }
  })
  app.delete('/products/:id', (req, res) => {
    // res.send('Hello World!')
    const {id} = req.params
    const index =  products.findIndex((p)=>p.id == id)
    if (index === -1) {
        res.status(404).send("not find such data")
    } else {
        const deletedItems = products.slice((index , 1))
        res.status(200).send(deletedItems)
    }
  })

  app.post("/products", (req, res) => {
    const { title, category, description, price } = req.body;
  
    const newProduct = {
      id: uuidv4(),
      title,
      price,
      description,
      category
      ,
      
    };
  
    products.push(newProduct);
    res.status(201).send({
      message: "successfully posted product!",
      newProduct,
    });
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})