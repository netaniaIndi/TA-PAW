const MY_API_KEY = 'ea6f0d8d8amsh25f8e6801b976bcp1123e6jsn036194e4b416';
// export { MY_API_KEY };
// run `npm install follow-redirects` before executing node test.js to ensure the library exists

// var net = require('follow-redirects').https;
// var fs = require('fs');
// var auth_key = Buffer.from('access_key:secret_key').toString('base64');

var options = {
  'method': 'GET',
  'hostname': 'api.roadgoat.com',
  'port': 80,
  'path': '/api/v2/destinations/new-york-ny-usa',
  'headers': {
    'Authorization': `Basic ${MY_API_KEY}`
  },
  'maxRedirects': 20
};

fetch('https://api.roadgoat.com/api/v2/destinations/auto_complete?q=barcelona', options)
.then(response => console.log(response))

	.catch(err => console.error(err));

// var req = net.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });
var net = require('follow-redirects').https;
var fs = require('fs');
var auth_key = Buffer.from('access_key:secret_key').toString('base64');

var options = {
  'method': 'GET',
  'hostname': 'api.roadgoat.com',
  'port': 80,
  'path': '/api/v2/destinations/auto_complete?q=barcelona',
  'headers': {
    'Authorization': `Basic ${auth_key}`
  },
  'maxRedirects': 20
};

var req = net.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();