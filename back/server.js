const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes');
const port = 3001;

app.use(bodyParser.json());

app.use('/api', api);


app.listen(port, (err) => {
    if(err) {
        throw new Error("Et c'est l'échec le plus total");
    }
        console.log(`Notre gentil serveur vous écoute sur le gros port ${port}`);
});
