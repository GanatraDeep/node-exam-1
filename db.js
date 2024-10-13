const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Nodedemo1')
    .then(function(){
        console.log("DB Connected");
    })

module.exports = mongoose;