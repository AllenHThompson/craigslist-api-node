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

          //THE SEARCH METHOD EXECUTES A SEARCH FOR A MATCH BETWWEN
          function testinput(re, str) {
               var midstring;
               if (str.search(re) != -1) {
                    midstring = ' contains ';
               } else {
                    midstring = ' does not contain ';
               }
               console.log('data' + midstring + re)
          }
          testinput('result-info', data)

          //USE INDEXOF TO FIND LOCATION OF MATCHING STRING THEN SLICE TEXT OUT

          var pos = (data.indexOf('<pclass="result-info"'))
          console.log(data.slice(pos, pos + 842))

          //String.prototype.split() splits a String object into an array of strings by separating the string into substrings



          //console.log(body);
          //console.log(data) //SHOW THE HTML FOR THE GOOGLE HOMEPAGE
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
