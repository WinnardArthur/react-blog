const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

const { User } = require('./models/user')

const config = require('./config/keys')

mongoose.connect(config.mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
    .then(()=>{
        console.log("Online Database Connected")
    })
    .catch(err => {
        console.error(err)
    })


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())


app.post("/api/users/register", (req, res)=>{
    const user = new User(req.body)

    user.save((err, userData)=>{
        if(err)
            return res.json({ success: false, err})
    })

    return(res.status(200)).json({success: true})
})


app.listen(5000, ()=>{
    console.log("SERVER RUNNING")
})


