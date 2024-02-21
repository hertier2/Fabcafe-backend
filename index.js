

const User = require ('./models/userModel');
const  bodyParser= require('body-parser');

//const Product = require ('./models/product');
//const Order = require ('./models/order');









const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000
const app = express();
const api=process.env.API_URL;
const userRouter = require('./routes/userRoute');
const mongoose = require('mongoose');
//const paymentRouter = require("./routes/payment");
const productRouter = require("./routes/productRoute");
const orderRouter = require("./routes/order");
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URI).then(() => console.log('DataBase connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', message: "welcome to my api"});
})

app.use('/', userRouter);
//app.use('/payment', paymentRouter)
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.listen(PORT, () => console.log(`app started on port ${PORT}`));