const path = require('path');
const indexPath = path.resolve(__dirname, 'text.txt');

const fs = require('fs');
const readableStream = fs.createReadStream(indexPath, 'utf-8');
readableStream.on('data', chunk => console.log(chunk));