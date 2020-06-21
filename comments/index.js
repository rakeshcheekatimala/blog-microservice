import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World! from comments App');
});

app.listen(3001, function () {
  console.log('Example Comments listening on port 3000!');
});
