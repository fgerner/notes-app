const fs = require('fs');
const chalk = require('chalk');

const getNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.green("Your note: " + title));
        console.log(note.body);
    } else {
        console.log(chalk.red('No note found'));
    }
}

const listNotes = () => {
    const list = loadNotes();
    console.log(chalk.green("Your notes"));
    list.forEach((note) => console.log(note.title));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Already exists'));
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => note.title !== title)
    if (remainingNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(remainingNotes);
    }
}

module.exports = {getNote: getNote, addNote: addNote, removeNote: removeNote, listNotes: listNotes};