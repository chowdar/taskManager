let express = require('express');


let app = express();

app.get('/', (req,res) => {
    res.send("homepage")
})



module.exports = app;