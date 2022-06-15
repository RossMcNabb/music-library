const express = require('express');

const app = express();
app.get("/", (request, response)=> {
    response.send("hello world");
}
)

app.use(express.json());

app.listen(3000, ()=> {
    console.log ("Server running on port 4000")
})

module.exports = app;