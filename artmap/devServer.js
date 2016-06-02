var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var mysql      = require('mysql');

var app = express();
var compiler = webpack(config);

var mysqlCredentials = {
  host     : 'server1102.cs.technik.fhnw.ch',
  user     : 'ivis_fs16',
  password : '',
  database : 'ivis_fs16'
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// MySQL stuff

app.get('/artist', function(req, res) {
  var connection = mysql.createConnection(mysqlCredentials);

  var queryString = 'SELECT RECNR, VORNAME, NAME, NAMENSSUCHE, NAMIDENT FROM Person WHERE';
  var fullname = req.query.name.split(' ');

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

app.get('/locations', function(req, res) {

  var connection = mysql.createConnection(mysqlCredentials);

  if (req.query.artistId && req.query.artistName) {
    try {

      var queryString =
        'SELECT AUSST_ORT, AUSST_TITEL, AUSST_INSTITUT, AUSST_DATUM FROM Ausstellung WHERE KUENSTLER_NAMENSSUCHE LIKE "' +
        req.query.artistId + '#' + req.query.artistName + '"';

      console.log(queryString);

      connection.connect();

      connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
      });

      connection.end();
    } catch (e) {
      res.send('SQL Error: ' + e);
    }
  }
  else {
    res.send('Error: No artistId given');
  }

});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
