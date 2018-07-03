const express = require('express');

var app = express();

app.use('/', express.static(__dirname));

app.listen(process.env.PORT || 5000, function(){
   console.log('app ready');
});