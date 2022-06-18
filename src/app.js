const express = require('express');

const app = express();
app.get("/", (request, response)=> {
    response.send("hello world");
}
)

app.use(express.json());

module.exports = app;