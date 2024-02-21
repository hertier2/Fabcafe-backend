const express = require('express');
const router = express.Router();
const {createOrder, getAllOrder,deleteOrder, getOrderById, updateOrder} = require ('../controllers/ordersController')

router.post('/orders/',createOrder);
router.get('/orders/',getAllOrder);
router.delete("/orders/:id", deleteOrder);
router.put("/orders/:id", updateOrder);
router.get('/orders/:id',getOrderById);

module.exports = router;




