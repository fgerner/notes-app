const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Notes...';
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log('Already exists');
    }
}
const removeNote = function (title) {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => {
        return note.title !== title;
    })
    if (remainingNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(remainingNotes);
    }
}

module.exports = {getNotes: getNotes, addNote: addNote, removeNote: removeNote};