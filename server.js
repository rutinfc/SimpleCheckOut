'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world. TEST\n');
  res.send('${HOST}:${PORT}\n');
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.17.0.1',
  user     : 'root',
  password : 'coco20',
  port     : 3306,
  database : 'my_db'
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

connection.connect();

connection.query('SELECT * from Persons', function(err, rows, fields) {
  if (!err){
    console.log('The solution is: ', rows);
  }
  else {
    console.log('Error while performing Query.', err);
  }
});

connection.end();
