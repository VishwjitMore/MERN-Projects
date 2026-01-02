const mongoose=require("mongoose");

const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   },
   {timestamps:true}
);

const NoteModel=mongoose.model("notes",NoteSchema);

module.exports=NoteModel;