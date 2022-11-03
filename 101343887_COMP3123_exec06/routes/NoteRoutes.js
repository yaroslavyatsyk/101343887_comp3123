const NoteModel = require('../models/NotesModel');
const express = require("express")
const routes = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    

    try {
        const note = new NoteModel(req.body)
        await note.save()
        res.send(note)
    }
    catch(error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async(req, res) => {
    try {
        const foods = await NoteModel.find({})
        res.status(200).send(foods)
    }
    catch(error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async(req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    
    try {
        const note = await NoteModel.findById(req.params.noteId)
        res.status(200).send(note)
    }
    catch(error) {
        res.status(500).send(error)
    }
    
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async(req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        console.log(req.body)
        const updatedNote = await NoteModel.findByIdAndUpdate(req.params.noteId, req.body)
        //console.log(updatedBook)
        const un = await updatedNote.save()
        res.status(202).send(un)
      } catch (err) {
        res.status(500).send(err)
      }
    
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await NoteModel.findByIdAndDelete(req.params.noteId)
    
        if (!book) { 
            res.status(404).send("No item found")
        }
        res.status(200).send(note)
      } catch (err) {
        res.status(500).send(err)
      }
});
routes.delete('/notes', async (req, res) => {
    // Validate request
    if(req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await NoteModel.deleteMany()
    
        if (!book) { 
            res.status(404).send("No item found")
        }
        res.status(200).send(note)
      } catch (err) {
        res.status(500).send(err)
      }
});
module.exports = routes