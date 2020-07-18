const notes = require('./notes');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    description: 'add shit',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    description: 'remove shit',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command: 'list',
    description: 'list shit',
    handler() {
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    description: 'read shit',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.getNote(argv.title);
    }
})
yargs.parse();