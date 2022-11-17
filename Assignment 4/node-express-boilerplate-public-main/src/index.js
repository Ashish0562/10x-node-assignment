const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.set('views','./views');
app.set('view engine','ejs');
app.get( '/',(req,res)=>{
    res.render("html.ejs")
})

const utils= require('./utils');

app.post("/add",(req,res)=>{
    const num1 =req.body.num1;
    const num2 =req.body.num2;
    var result={}
    if (!(utils.invalidData(num1)) && !(utils.invalidData(num2))) {
      result = utils.add(Number(num1),Number(num2));
    } else {
      result ={
        status : 'error',
        message : 'Invalid data types'
      }
    }
    res.send(result)
    
  });
  app.post("/sub",(req,res)=>{
    const num1 =req.body.num1;
    const num2 =req.body.num2;
    var result={}
    if (!(utils.invalidData(num1)) && !(utils.invalidData(num2))) {
      result = utils.sub(Number(num1),Number(num2));
    } else {
      result ={
        status : 'error',
        message : 'Invalid data types'
      }
    }
    res.send(result)
    
  });
  app.post("/multiply",(req,res)=>{
    const num1 =req.body.num1;
    const num2 =req.body.num2;
    var result={}
    if (!(utils.invalidData(num1)) && !(utils.invalidData(num2))) {
      result = utils.multiply(Number(num1),Number(num2));
    } else {
      result ={
        status : 'error',
        message : 'Invalid data types'
      }
    }
    res.send(result)
    
  });
  app.post("/divide",(req,res)=>{
    const num1 =req.body.num1;
    const num2 =req.body.num2;
    var result={}
    if (!(utils.invalidData(num1)) && !(utils.invalidData(num2))) {
      result = utils.divide(Number(num1),Number(num2));
    } else {
      result ={
        status : 'error',
        message : 'Invalid data types'
      }
    }
    res.send(result)
    
  });


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;