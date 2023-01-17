const fs = require('fs');
const https = require('https');
//const tar = require('tar');
const unzipper = require('unzipper');
const url = 'https://opendata.samtrafiken.se/gtfs/skane/skane.zip?key=762ba7e4b02b4688856cc10ae69af137';
const dest = __dirname;
/*
https.get(url, (response) => response
    .pipe(tar.extract({ cwd: dest }))
    .on('finish', function () {
        console.log('done');
    })
);
*/
https.get(url, { headers: { "Accept-Encoding": "gzip" } }, (response) => response
    .pipe(unzipper.Extract({path: './test/'})).on('finish', () => console.log('done'))
);
console.log("waiting");