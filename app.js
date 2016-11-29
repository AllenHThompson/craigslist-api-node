var express = require('express');
var cors = require('cors');
var app = express();
var http = require('http');

app.get('/', function(request, response) {
     response.send("Hello World!");
});

function getData() {
     return http.get({
          url: 'https://atlanta.craigslist.org/search/bik'
     }), function(data) {
          console.log(data);
     };
}

getData();

//app.get('https://atlanta.craigslist/search/bik')



app.listen(8000, function() {
     console.log("Listening on port 8000");
});
