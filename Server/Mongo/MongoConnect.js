const mongoose = require('mongoose');

let obj = {};
obj.connect = () => {
    mongoose.connect("mongodb://localhost:27017/sassproject", { useNewUrlParser: true, useUnifiedTopology: true })
    const connect = mongoose.connection;
    connect.on('error', console.error.bind(console, 'Mongodb error!!'));
    connect.once("open", () => {
        console.log("MongoDB is connected")
    })
}



module.exports = obj;