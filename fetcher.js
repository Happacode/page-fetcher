const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];

request(url, function(error, response, body) {
  if (error) throw error;
  fs.writeFile(filename, body, (err) => {
    if (err) {
      console.log("There was an err", err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filename}`);
    }
  });
});


// Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)