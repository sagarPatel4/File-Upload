const path=require("path")
const express = require("express")
const router=require("./router/simple")
const mongoose = require('mongoose');

const app=express()
const port = 8001


const mongoURI = 'mongodb://localhost:27017/fileUploads';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended:false}))

app.use("/",router)
app.use("/upload",router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))