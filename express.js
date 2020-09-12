const express = require('express');

const app = express();

//Body Parse
//app.use(express.urlencoded({extended: false}))
//app.use( express.json());

// Get Static HTML Page
app.use(express.static(__dirname + '/public'));

/*
app.get('/:id', (req, res) =>{
    //console.log(req.query)
    //req.body
    //console.log(req.headers)
    console.log(req.params)
    res.status(404).send('not found');
})
*/


app.listen(3000);