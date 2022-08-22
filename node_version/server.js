let express = require('express');
let bodyParser = require('body-parser');
let https = require('https');

let port = 8000;
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('static'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    console.log(req.body);
    let name = req.body.name;
    let subject = req.body.subject;
    let email = req.body.email;
    let message = req.body.message;
    // res.send(name +  " " + last_name +  " " + email);
    let data = {
        members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields : {
                FNAME: name,
                MMERGE6: subject,
                MMERGE6: message,
            }
        }
      ]
    };

    let jsonData = JSON.stringify(data);

    let url = 'https://us11.api.mailchimp.com/3.0/lists/0c8ee0d6d4';

    let options = {
        method: 'POST',
        auth: 'piballtec:a2ce993ce8af7de86ee7f3ce50e44a29-us11',
    }

    let request = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.send('Yes')
        } else {
            res.send('No');
        }

        response.on('data', function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

app.listen(port, () => {
    console.log(`App listening on post ${port}`);
});

