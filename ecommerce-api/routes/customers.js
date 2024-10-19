const express = require('express');
const Customer = require('../models/customers')
const customerControllers = require('../controllers/customers');

const router = express.Router();
router.get('/',customerControllers.getAllCustomers)

router.get('/:id',customerControllers.getCustomerById)
router.post('/',async (req, res) =>{
    const newCustomer = new Customer({
        name: req.body.name,
        place: req.body.place,
        hobbies:req.body.hobbies,
        address:req.body.address
    });
    try{
        const savedData = await newCustomer.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

router.patch('/:id', async (req,res)=>{
    const id = req.params.id;
    const data = req.body;

    try{
        const result = await Customer.findByIdAndUpdate(id,data);

        const updateData = await Customer.findById(id);
        res.status(200).json(updateData);
    }catch(error){
res.status(500).json({message:error.message});
    }

})
router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const result = await Customer.findByIdAndDelete(id);
        res.status(200).json({message:"deleted successfully"})
    } catch (error){
        res.status(500).json({message:error})
    }
})

module.exports = router;