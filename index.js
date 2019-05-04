const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

// Index route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// start server
const server = app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = server;