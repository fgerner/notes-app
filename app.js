const chalk = require('chalk');
const getNotes = require('./notes');
const yargs = require('yargs');

yargs.command({
 command: 'add',
 description: 'add shit',
 handler: function () {
  console.log('adding shit');
  }
});
yargs.command({
 command: 'remove',
 description: 'remove shit',
 handler: function () {
  console.log('removing shit');
 }
})
yargs.command({
 command: 'list',
 description: 'list shit',
 handler: function () {
  console.log('list shit');
 }
})
yargs.command({
 command: 'read',
 description: 'read shit',
 handler: function () {
  console.log('read shit');
 }
})

console.log(yargs.argv)