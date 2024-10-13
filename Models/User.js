const db = require("../db")

const schema = new db.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const User = db.model('User',schema);

module.exports=User