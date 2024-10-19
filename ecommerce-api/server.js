const express = require('express');
const mongoose =require('mongoose');
const customersRoutes = require('./routes/customers');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_CONN_STRING = process.env.DATABASE_URL;
const app = express();
mongoose.connect(DB_CONN_STRING);
const database = mongoose.connection;
database.on('error',(error) =>{
    console.log('BD Error:', error);
});
database.once('connected',()=>{
    console.log('Database connected successfully');
})
app.use(express.json());
app.use('/api/customers',customersRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/orders',ordersRoutes);
app.listen(PORT, () =>{
    console.log('server is waiting for requests. port:',PORT);
})