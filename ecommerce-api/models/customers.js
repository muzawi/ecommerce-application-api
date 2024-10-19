const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    addressLine1:{
        require:true,
        type:String
    },
    city:{
        require:true,
        type:String
    },
    pincode:{
        require:true,
        type:Number
    }
})
const customerSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    }, 
    place: {
        require: true,
        type: String
    },
    address:addressSchema,
    hobbies:{
        type: [String]
    }
});
module.exports = mongoose.model('customer',customerSchema)
