
const customersRepository = require('../repositories/customers')
async function getAllActiveCustomers() {
const customers = customersRepository.getAllCustomers();


return customers;
}

module.exports = {
    getAllActiveCustomers
}
