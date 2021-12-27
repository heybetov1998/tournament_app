const express = require('express');
const path = require('path');
const routes = require('./routes');

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});