import express from 'express';
import bodyparser from 'body-parser';
import {randomBytes} from 'crypto';
const app = express();

app.use(bodyparser.json());

let posts = {};

app.get('/posts',  (req, res)=> {
  res.send(posts);
});

app.post('/posts',(req,res)=>{
  let title = req.body.title;
  let id = randomBytes(4).toString('hex'); // generate randombytes and convert to hex value
  
  posts[id] = {
    id,
    title
  }
  res.status(201).json(posts);
})
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
