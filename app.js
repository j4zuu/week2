'use strict';
const express = require('express');
const app = express();
const port = 3000;
const rootRoute = require('./routes/rootRoute.js')
const catRoute = require('./routes/catRoute.js')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', rootRoute);
app.use('/cat', catRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
/*
const myArr = [2,3,4,5,6,7,8,9];
const mapArr = myArr.map(i => i * 3);
const filterArr = myArr.filter(i => i >5);
const reduced = myArr.reduce((acc, i) => acc += i)
console.log(myArr, mapArr, filterArr, reduced)*/