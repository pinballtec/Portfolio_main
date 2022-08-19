let express = require('express');
let bodyParser = require('body-parser');

let port = 8000;
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('static'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`App listening on post ${port}`);
});