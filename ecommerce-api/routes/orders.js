// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const OrderService = require('../services/order');

// Create a new order
router.post('/', async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = await OrderService.createOrder(orderData);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get an order by ID
router.get('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await OrderService.getOrderById(orderId);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an order
router.put('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const updateData = req.body;
        const updatedOrder = await OrderService.updateOrder(orderId, updateData);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an order
router.delete('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        await OrderService.deleteOrder(orderId);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
