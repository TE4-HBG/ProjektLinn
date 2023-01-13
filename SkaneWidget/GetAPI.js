const fs = require('fs');
const https = require('https');
const tar = require('tar');

const url = 'https://opendata.samtrafiken.se/gtfs/skane/skane.zip?key=762ba7e4b02b4688856cc10ae69af137';
const dest = __dirname;

https.get(url, function(response) {
    if(!response){
        console.log('response is undefined');
        return;
    }
    response
      .pipe(tar.extract({ cwd: dest }))
      .on('finish', function () {
          console.log('done');
      });
  });