const User = require('../Models/User');
const app = require('express').Router();

app.get('/getuser',async function (req,res) {
    const a = await User.find({});
    return res.render('index', {a: a})
})

app.get('/insertuser', async function(req, res){
    return res.render('insertuser');
})
app.post('/insertuser',async function(req,res){
    console.log(req.body);
    
    const {name , password , email}= req.body
    const u = new User()
    u.name = name
    u.password = password
    u.email = email

    await u.save()
    // return res.json(u)
    return res.render('insertuser')
})


//update
app.get('/updateuser/:id', async function(req, res){
    const id = req.params.id
    const u = await User.findById(id)

    return res.render('updateuser', {u: u})
})
app.post('/updateuser',async function (req,res) {
    const {id , name , password , email}= req.body
    const u = await User.findById(id)
    u.name = name
    u.password = password
    u.email = email

    await u.save()
    // return res.json(u)
    return res.render('updateuser', {u: u})
})


//delete
app.get('/deleteuser/:id',async function(req,res){
    const id = req.params.id
    const u = await User.findByIdAndDelete(id)
    
    const a = await User.find({});
    return res.render('index', {a: a})
})


module.exports = app