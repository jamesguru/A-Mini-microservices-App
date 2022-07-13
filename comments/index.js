const express = require('express');

const {randomBytes} =require('crypto');

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());


const commentByPostId = {}; 


app.get('/posts/:id/comments', (req,res) => {


res.send(commentByPostId[req.params.id] || []);


})


app.post('/posts/:id/comments',(req,res) => {


    const commentId = randomBytes(4).toString('hex');

    const {content} = req.body;

    const comments = commentsById[req.params.id] || [];

    comments.push({id:commentId,content});

    commentsByPostId[req.params.id] = comments;


    res.status(201).send(comments);



})


const PORT = 5000;


app.listen(PORT, () => {


    console.log( `Service started on port ${PORT}`);
})