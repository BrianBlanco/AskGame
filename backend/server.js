const express = require('express');
const app = express();
const port = (process.env.PORT || 4000);

const mongodb = require('mongodb');


const jwt = require('jsonwebtoken');

const connection = require('./dbAuth');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('dotenv').config();

const {
  findDocuments,
  insertDocuments,
  updateDocument,
  deleteDocument
} = require('./querys.js');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Create mongoclient
const MongoClient = require('mongodb').MongoClient;

// URI to connect with mongoDB server with Brian account
// Please, just hide this before push
const uri = process.env.MONGO_URI;

// Name of the collections to use (this will be removed soon, only for test)
// const collectionName = "sample";

// Prepare a connection with the client
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// console.log(client);

client.connect(err => {
  if (err) throw err;

  // DataBase instance
  const db = client.db(process.env.DB_NAME);

  app.post('/find', function (req, res) {

    /*  let collectionName = req.body.collectionName;
    let query = req.body.query; */
    let query = {};

    findDocuments(db, 'Users', query, function (resultData) {
      console.log(resultData);
      res.send(resultData);
    });
  });
  
});


app.post('/login', function (req, res) {
  let loginName = req.body.username;
  let password = req.body.password

  console.log(password, loginName);

  connection.query(
    `SELECT * FROM users WHERE login_name = '${loginName}' AND password = '${password}';`,
    function (error, results, fields) {
      if (error) throw error;

      res.send(results);
    });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})