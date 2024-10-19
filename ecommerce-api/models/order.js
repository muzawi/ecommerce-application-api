// models/Order.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderLineItemSchema = new Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
    unit_price: { type: Number, required: true }
});

const orderSchema = new Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    date: { type: Date, required: true },
    total_amount: { type: Number, required: true },
    order_line_items: [orderLineItemSchema]
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
