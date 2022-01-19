const router = require('./routes.js');
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
//const cors = require('cors');


const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());
app.use('/api', router);
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

