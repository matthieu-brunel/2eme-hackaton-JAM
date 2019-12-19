const express = require('express');
const router = express.Router();
const connection = require("./conf")

router.get('/', (req, res)=> {
    connection.query('SELECT * FROM charInfo', 
    (err , results)=> {
        if(err) {
            console.log("Oups, ceci n'est pas bon signe");
        } else {
            console.log("Oui !!!");
            res.json(results);
        }
    })
});

router.get('/text', (req, res)=> {
    connection.query('SELECT text FROM charInfo', 
    (err , results)=> {
        if(err) {
            console.log("Oups, ceci n'est pas bon signe");
        } else {
            console.log("Oui !!!");
            res.json(results);
        }
    })
});
module.exports = router;