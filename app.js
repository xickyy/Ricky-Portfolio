const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));
const port = 3000;

app.use(express.static("public"));


app.listen(port, () => console.log(`Express app running on port ${port}!`));
