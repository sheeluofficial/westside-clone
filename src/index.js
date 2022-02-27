const express = require("express")
const app = express()
const port = 2345
const PATH = require("path")
const connect = require("./configs/db")
const parser = require("body-parser")
const ejs = require("ejs")
const expresslayouts = require("express-ejs-layouts")

const productController = require("./controllers/product.controller");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config()
app.use(express.json())

app.use(express.static("public"))

// set Template Engine
// app.use(expresslayouts)



app.set("view engine","ejs")
app.set("views",PATH.join(__dirname,"../public"))


app.use("/product", productController);

app.get("/",(re,res)=>{
  res.render("index")
})

app.get("/payment",(req,res)=>[

  res.render("payment",{

  })
])





app.listen(port, async ()=>{
    await connect()

    console.log(`server is connected on port ${port}`)
    
})