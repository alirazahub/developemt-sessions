const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

// API
app.get('/api', (request, response) => {
    response.send({ message: "Hello World!" })
});
app.get('/new', (request, response) => {
    response.send({ message: "new hello World!" })
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});