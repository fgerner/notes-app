const fs = require('fs');
// fs.writeFileSync('notes.txt', 'written by node');
fs.appendFileSync('notes.txt', '\nwritten by fred');