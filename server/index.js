let express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.listen(8000, () => {
    console.log('Bucketlist listening on port 8000 :)');
});
