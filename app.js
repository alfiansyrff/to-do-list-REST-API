/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');
const List = require('./models/list')


const app = express();
const port = process.env.PORT || 3000;
const host = 'localhost';

const uri = 'mongodb://localhost:27017/als';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const Client = mongoose.connection

Client.on('open', () => {
  console.log('connected');
})

app.use(express.json());

const listRouter = require('./controller/app.controller');
app.use('/lists', listRouter);


app.get('/', async (req, res) => {
  const lists = await List.find();
  res.send(lists);
});

app.post('/', async (req, res) => {

})

app.listen(port, () => {
  console.log(`Server is running in https://${host}:${port}`);
});

