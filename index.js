let express = require('express');
let app = express();

app.get('/discordOauth/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000);