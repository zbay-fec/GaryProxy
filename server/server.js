const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3010;

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`proxy server running at: http://localhost:${port}`);
});