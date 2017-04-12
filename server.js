'use strict'

let express = require('express');
// Create an app
let app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  // forward https to http so that it work with free open weather
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('express is running on port: ' + PORT);
});
