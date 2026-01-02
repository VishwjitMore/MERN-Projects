const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const NoteModel=require("./models/note");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/noteapp")
    .then(() => {
        console.log("DB coonnected successfully");
    }).catch((err) => {
        console.log(err);
    });

app.get("/",async(req,res)=>{
    try{
       const note= await NoteModel.find({});
       res.json(note);
    }
    catch(err){
        res.json(err);
    }
});
app.post("/notes",async(req,res)=>{
    try{
       const note= await NoteModel.create(req.body);
       res.json(note);
    }
    catch(err){
        res.json(err);
    }
});
app.get("/notes/:id",async(req,res)=>{
    try{
       const note= await NoteModel.findById(req.params.id);
       res.json(note);
    }
    catch(err){
        res.json(err);
    }
});
app.put("/notes/:id",async(req,res)=>{
    try{
       const note= await NoteModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.json(note);
    }
    catch(err){
        res.json(err);
    }
});

app.delete("/notes/:id",async(req,res)=>{
    try{
       const note= await NoteModel.findByIdAndDelete(req.params.id);
       res.json(note);
    }
    catch(err){
        res.json(err);
    }
});


app.listen(8080, () => {
    console.log("app is listening to port 8080");
});
