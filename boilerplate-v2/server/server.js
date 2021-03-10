const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// This is the value created by Heroku, need to use this for production in case the static port is not available
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Using * will match all unmatched routes (anything that isn't in the public folder), e.g. /create
// This ensures all pages will load correctly even if outside public folder
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running')
});