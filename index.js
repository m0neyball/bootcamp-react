const express = require('express');
const app = express();
const serveStatic = require('serve-static');

app.use(serveStatic(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
