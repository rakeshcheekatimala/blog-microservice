import express from 'express';
import bodyparser from 'body-parser'
import {randomBytes} from 'crypto';

const app = express();
app.use(bodyparser.json());
let commentsByPostId = {};

app.get('/posts/:id/comments',  (req, res)=> {
  res.send(commentsByPostId[req.params.id]||[]);
});

app.post('/posts/:id/comments',  (req, res) => {
  let postId = req.params.id; // postid
  let comments = commentsByPostId[postId] || [];
  let commentId = randomBytes(4).toString('hex');
  let {content} = req.body;
  comments.push({id:commentId,content});
  commentsByPostId[postId] = comments;
  res.status(201).send(comments);
});


app.listen(4001, function () {
  console.log('Example Comments listening on port 4001!');
});
