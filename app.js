console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log('Command ', command);
//console.log('Process ', process.argv);
console.log('Yargs ', argv);

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        var message = !_.isNil(note) ? `Note ${note.title} successfully created` : 'Note already in use';

        console.log(message);
        break;
    
    case 'list':
        //console.log('Listing all notes');
        notes.getAllNotes();
        break;
    
    case 'read':
        var note = notes.getNote(argv.title);
        var message = !_.isNil(note) ? `Note ${note.body} successfully found` : 'Note not found';

        console.log(message);
        break;
    
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note removed successfully' : 'Note not found';

        console.log(message);
        break;

    default:
        console.log('Command not recognized');
        break;
}
