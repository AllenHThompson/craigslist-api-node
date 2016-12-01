var express = require('express');
var cors = require('cors');
var app = express();
var http = require('http');
var request = require('request');

app.get('/', function(request, response) {
     response.send("Hello World!");
});

var URL = 'https://atlanta.craigslist.org/search/bik';
//var URL = 'https://atlanta.craigslist.org/sat/bik/5845333537.html';

request(URL, function(error, response, body) {
     if (!error && response.statusCode === 200) {

          var data = body.replace(/\s/g, '')

          console.log(body);
          console.log(data) //SHOW THE HTML FOR THE GOOGLE HOMEPAGE
     }
})

// JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function(key, value) {
//      console.log(key);
//      return value;
// });

/* NOT SURE HOW TO MAKE THE CALL TO THE API*/
// app.get('/', function(){})
// function getData() {
//      return http.get({
//           url: 'https://atlanta.craigslist.org/search/bik'
//      }), function(data) {
//           console.log(data);
//      };
// }
//
// getData();

//app.get('https://atlanta.craigslist/search/bik')



app.listen(8000, function() {
     console.log("Listening on port 8000");
});
