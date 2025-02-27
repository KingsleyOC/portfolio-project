const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routes/categoryRoute');
const productRouter = require('./routes/productRoute');
const storeRouter = require('./routes/storeRoute');
const contactRouter = require('./routes/contactRoute');

const app = express();

app.use(express.json());
app.use(cors());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to easyfind app!');
});

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/stores', storeRouter);
app.use('/api/v1/contacts', contactRouter);

module.exports = app;