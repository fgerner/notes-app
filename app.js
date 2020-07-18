const chalk = require('chalk');
const getNotes = require('./notes');
const yargs = require('yargs');

const command = process.argv[2];

console.log(process.argv)

if (command === 'add') {
    console.log('Adding');
}else if (command === 'remove'){
    console.log('Removing');
}
