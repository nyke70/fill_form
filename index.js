const express = require('express')
const sequelize = require('./utile.js')
const connect = require('./help.js')
const User = require('./fonction.js/form.js')
const app = express()
app.use(express.json());

app.post('/api/v1/submit', async (req, res) => {
  try {
    const form = await User.create(req.body);
    res.status(201).json(form);}
     catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }})
app.get('/', (req, res) => res.send('Hello World!'))
const port = 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))