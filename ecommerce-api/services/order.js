// services/OrderService.js
const OrderRepository = require('../repositories/orders');

class OrderService {
    async createOrder(orderData) {
        // Here, additional validation, transformations, or calculations can be done if needed.
        const order = await OrderRepository.createOrder(orderData);
        return order;
    }

    async getOrderById(orderId) {
        const order = await OrderRepository.getOrderById(orderId);
        if (!order) {
            throw new Error('Order not found');
        }
        return order;
    }

    async getAllOrders() {
        return await OrderRepository.getAllOrders();
    }

    async updateOrder(orderId, updateData) {
        return await OrderRepository.updateOrder(orderId, updateData);
    }

    async deleteOrder(orderId) {
        return await OrderRepository.deleteOrder(orderId);
    }
}

module.exports = new OrderService();
