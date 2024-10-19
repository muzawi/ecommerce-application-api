const customersRepository = require('../repositories/customers')
const customersService = require('../services/customers');
async function getAllCustomers(req ,res){
    const customers = await customersService.getAllCustomers();
    res.status(200).json(customers);
}

async function getCustomerById(req,res){
    const id = req.params.id;
   const customers = await customersRepository.getCustomerById(id);
    res.status(200).json(customers);
}

module.exports = {
    getAllCustomers,
    getCustomerById
}