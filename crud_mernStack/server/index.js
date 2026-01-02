const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud")
    .then(()=>console.log("connected successfully"))
    .catch((err)=>console.log(err));



app.get("/", async (req, res) => {
    try {
        const user = await UserModel.find({});
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

app.post("/create", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

app.get("/update/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

app.put("/update/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});




app.listen(8080, () => {
    console.log("app is listening to port 8080");
});