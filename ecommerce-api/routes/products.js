const express = require('express');
const{Brand, Category,Product} = require('../models/product')

const router = express.Router();

router.get('/',async (req,res)=>{
    const products = await Product.find().populate(['category','brand']);
    res.status(200).json(products);
})



router.post('/', async (req,res) =>{
    const newProduct = new Product ({
        title: req.body.title,
        price:req.body.price,
        offerPrice:req.body.offerPrice,
        category:req.body.category,
        brand:req.body.brand
    })
    const data = await newProduct.save();
    res.status(201).json(data);
    })




router.post('/brands', async (req,res) =>{
const newBrand = new Brand ({
    name: req.body.name
})
const data = await newBrand.save();
res.status(201).json(data);
})

router.post('/categories', async (req,res) =>{
    const newCategory = new Category ({
        name: req.body.name
    })
    const data = await newCategory.save();
    res.status(201).json(data);
    })

module.exports = router;