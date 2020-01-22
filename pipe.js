const fs = require('fs')  -- Required --



-- Requires Two Streams to work  --

const readStream = fs.createReadStream('./example.txt','UTF-8')
const writeStream = fs.createWriteStream('2.txt');
readStream.pipe(writeStream);




-- Creates a Zip or gz file --

const fs = require('fs')
const zlib = require('zlib');

const gzip = zlib.createGzip(); 
const readStream = fs.createReadStream('./example.txt','UTF-8')
const writeStream = fs.createWriteStream('2.gz');
readStream.pipe(gzip).pipe(writeStream);




 -- Creates an unzipped file --

const fs = require('fs')
const zlib = require('zlib');

const gunzip = zlib.createGunzip(); 
const readStream = fs.createReadStream('./2.gz')
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);