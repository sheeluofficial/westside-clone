const mongoose = require("mongoose")

module.exports =()=>{
    return mongoose.connect("mongodb+srv://Omkar:Omkar_123@cluster0.gnkio.mongodb.net/wsproducts?retryWrites=true&w=majority")
}
