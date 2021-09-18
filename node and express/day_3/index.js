const express = require('express');
const app = express();

//CRUD -> Create, Read, Update, Delete

const slash = (req, res, next) => {
    res.send = ("hello");
};
app.get('/', slash);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
}); // end app.listen()