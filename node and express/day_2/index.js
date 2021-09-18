const express = require('express');
const app = express();
// //const port = 3000;

// //security, performance, edge cases
// //CRUD -> post, get, put, delete

// // app.get('/', (req, res) => {res.send('Hello World!');
// // res.sendStatus(201);});
// const slash = ('/', (req, res) => {
//     res.sendStatus(200); //db update 200 0k,300 multiple choices, 400 bad, 500 internal server error 
//     res.send(); //works like a return function i.e; code is not executed after res.send just like return
// });

// const hash = ('/', (req, res) => {
//     res.json({ msg: "Hello World!", status: 201 });
//     res.status(202).send('Hello World!'); //pipelining
// });


// app.get('/', slash); //it runs acc. to series of res
// app.put('/', slash);
// app.post('/', slash);
// app.delete('/', slash);
// app.get('/', hash);
// app.put('/', hash); // updated successfully

// app.get('/products', (req, res) => {
//     res.send(req.query);
// })
// app.get('/ab?cd', (req, res) => {
//     res.send('abcd') // b id optional in url
// });
// app.get('/ab+cd', (req, res) => {
//     res.send('theek hai')
// }); //can occur b several times in url
// app.get('/ab*cd', (req, res) => {
//     res.send('ye bhi theek hai')
// }); // url finsihes with cd
// app.get('/ab(cd)?e', (req, res) => {
//     res.send('ye bhi bilkul theek hai')
// }); //cd is optional
// app.get(/a/, (req, res) => {
//     res.send('regex')
// }); // regex here, start with a alphabet
// app.get(/.*fly$/, (req, res) => {
//     res.send('fly') //ends with fly
// });
// app.get('/users/:userID/books/:bookID', function(req, res) {
//     console.log(req.query);
//     res.send(req.params); //params are the url params in this case userID and bookID and use req.params.userID and req.params.bookID for the params
// });

// //middle ware
// app.get('/', (req, res) => {
//     res.json({ text: req.body.text, status: 201 })
// });

// app.get('/', (req, res, next) => {
//     console.log("in next", req.query);
//     if (req.query.admin == true) {
//         next()
//     } else {
//         (res.status(401).send('Unauthorized'));
//     }
// }, (req, res) => {
//     res.status(200)
//     res.json(req.query)
// });
const bodyParser = require('body-parser');
const checkAdmin = (req, res, next) => {
        //(req.query.admin == true)
        if (req.query.auth === 'pqrs') {
            console.log('1');
            next()
        } else {
            console.log('2');
            (res.status(401).send('Unauthorized'));
        }
    }
    //app.use(checkAdmin); //use when wanna check on the all the url middleware are executed in the order they are defined 

const sendRes = (req, res) => {
    res.status(200)
    res.json(req.query)
    console.log('inside middleware');
};
app.use(express.urlencoded());
app.use(express.json({ extended: true }));

app.get('/', checkAdmin, sendRes); //check for specific url; remove checkAdmin if you are using app.use(checkAdmin) for all the urls 


app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ text: req.body })
});

//app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
app.listen(5000);