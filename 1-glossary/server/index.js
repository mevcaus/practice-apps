require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const router = require("./router")
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.set('port', process.env.PORT || 4242)
app.listen(app.get('port'), () => {
    console.log(`Listening at ${app.get('port')}`);
})

