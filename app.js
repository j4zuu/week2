'use strict';
const express = require('express');
const app = express();
const port = 3000;
const rootRoute = require('./routes/rootRoute.js')
const catRoute = require('./routes/catRoute.js')
const userRoute = require('./routes/userRoute.js')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('uploads'))

app.use('/', rootRoute);
app.use('/cat', catRoute);
app.use('/user', userRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
