const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("It worked Welcome to Devops, Automated Deployment");
});

const port = 8080;
app.listen(port, () => {
    console.log(port);
});
