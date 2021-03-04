const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB,
    {useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=>console.log('mongodb connected'))
   .catch((err:any)=>console.log('error =>', err.message));

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});