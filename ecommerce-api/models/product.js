const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
      require:true,
      type:String  
    }
})
const Category  = mongoose.model('Category',categorySchema);

const brandSchema = new mongoose.Schema({
    name: String
});

const Brand = mongoose.model('Brand', brandSchema);
const productSchema = new mongoose.Schema({
    title:{
        require:true,
        type:String
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Brand'
    },
    price:Number,
    offerPrice:Number
})
const Product = mongoose.model('Product', productSchema);
module.exports = {
    Category,
    Brand,
    Product
}