 
const Customer = require('../models/customers')

 
 async function getAllCustomers(){
    const customers = await Customer.find();
    return customers;
}

async function getCustomerById(id){
    const customer = await Customer.findById(id);
    return customer;
}

async function createCustomer(customer){

}
async function updataCustomer(id, data){


}
async function deleteCustomer(id){

}
module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updataCustomer,
    deleteCustomer
}