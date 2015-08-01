var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.all('*', function(req, res) {
  res.status(401).json({msg: 'page not found'});
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server running on port ' + (process.env.PORT || 3000));
});
