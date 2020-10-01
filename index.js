const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000


mongoose.connect("mongodb+srv://JadenXmith:Gibbwizze@react-blog.ls5g2.mongodb.net/<dbname>?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Online Database Connected")
    })
    .catch(err => {
        console.error(err)
    })


app.get("/", (req, res)=>{
    res.send("Hello")
})


app.listen(5000, ()=>{
    console.log("SERVER RUNNING")
})


