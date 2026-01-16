const fs = require('fs');
const path = require('path');
// Read file (Async)
fs.readFile(path.join(__dirname, 'message.txt'), 'utf8', (err, data) => {
if (err) throw err;
console.log("Content from file:", data);
});
