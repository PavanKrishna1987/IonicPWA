var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('www'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening to port ' + app.get('port'));
})