const express = require('express');
const app = express();
const path = require('path');
console.log(__dirname);
app.use('/', (req, res, ) => {
    res.sendFile(path.join(__dirname, "public/hello.txt"), 'test.txt')
});

app.listen(5000);