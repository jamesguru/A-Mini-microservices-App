const express = require("express");

const {randomBytes} = require("crypto");


const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const posts = {};


app.get('/posts',(req,res) =>{




});


app.post('/posts',(req,res) => {


    const id = randomBytes(4).toString('hex');
    const {title} = req.body;


    posts[id]={

        id,

        title
    }
})

const PORT = 4000;
app.listen(PORT, () => {

    console.log(`Service started on port ${PORT}`)
})