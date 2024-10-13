const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'Views');

const usercrud = require('./Routes/usercrud')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(usercrud)

app.listen(3000)