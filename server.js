const express = require('express');
const server = express();
const PORT = process.env.PORT || 5509;

server.get('/test', (require, response) =>{

    response.send("work");
});



server.listen(PORT, () => console.log("listen on port 5509"));
