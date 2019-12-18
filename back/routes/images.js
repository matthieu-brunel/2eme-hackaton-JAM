const express = require('express');
const router = express.Router();
const connection = require("./conf")

router.get('/', (req, res)=> {
    connection.query('SELECT * FROM images', 
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