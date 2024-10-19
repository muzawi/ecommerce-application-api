// repositories/OrderRepository.js
const Order = require('../models/order');

class OrderRepository {
    async createOrder(orderData) {
        const order = new Order(orderData);
        return await order.save();
    }

    async getOrderById(orderId) {
        return await Order.findById(orderId).populate('customer').populate('order_line_items.product');
    }

    async getAllOrders() {
        return await Order.find().populate('customer').populate('order_line_items.product');
    }

    async updateOrder(orderId, updateData) {
        return await Order.findByIdAndUpdate(orderId, updateData, { new: true });
    }

    async deleteOrder(orderId) {
        return await Order.findByIdAndDelete(orderId);
    }
}

module.exports = new OrderRepository();
