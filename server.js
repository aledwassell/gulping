const express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, function() {
  console.log("server running at localhost: " + (process.env.PORT || 3000));
});
