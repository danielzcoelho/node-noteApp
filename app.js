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
        //console.log('Adding new note');
        notes.addNote(argv.title, argv.body);
        break;
    
    case 'list':
        //console.log('Listing all notes');
        notes.getAllNotes();
        break;
    
    case 'read':
        //console.log('Reading note');
        notes.getNote(argv.title);
        break;
    
    case 'remove':
        //console.log('Removing note');
        notes.removeNote(argv.title);
        break;

    default:
        console.log('Command not recognized');
        break;
}