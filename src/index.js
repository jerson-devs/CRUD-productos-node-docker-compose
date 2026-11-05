const express = require("express");
require('dotenv').config()
const path = require("path");
const router = require("./router/index")

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(router);

app.listen(3000, function(){
    console.log("Servidor iniciado en http://localhost:3000");
});