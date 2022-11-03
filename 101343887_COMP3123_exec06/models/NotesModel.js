const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    noteTitle : String,
    noteDescription : String,
    dateAdded : Date,
    dateUpdated : Date,
    priority : {
        type: String,
        enum : ['Low', 'Medium', 'High'],
        default : 'Low'
    }
})
const NoteModel = mongoose.model("Notes",NoteSchema)
module.exports = NoteModel