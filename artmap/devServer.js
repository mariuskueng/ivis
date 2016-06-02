var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var mysql      = require('mysql');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/artist', function(req, res) {
  var queryString = 'SELECT RECNR, VORNAME, NAME, NAMENSSUCHE FROM Person WHERE';
  var fullname = req.query.name.split(' ');

  var connection = mysql.createConnection({
    host     : 'server1102.cs.technik.fhnw.ch',
    user     : 'ivis_fs16',
    password : '',
    database : 'ivis_fs16'
  });

  fullname.forEach(function(name) {
    queryString += ' NAMENSSUCHE LIKE ' + connection.escape('%'+name+'%') + ' AND';
  });

  queryString = queryString.substring(0, queryString.length - 3);

  try {
    connection.connect();

    connection.query(queryString, function(err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    });

    connection.end();
  } catch (e) {
    res.send('SQL Error: ' + e);
  }
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
