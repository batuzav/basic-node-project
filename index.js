const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const { MLReportProduct } = require("./services/callingToML");

const app = express();
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/public'));


app.use(require("./graphql/index"));

//process to heroku config
process.env.PORT = process.env.PORT || 3001;
const server = app.listen(`${process.env.PORT}`, async () => {
    console.log(`Se esta escuchando el puerto:  ${process.env.PORT}`);
    console.log("ml url", process.env.URL_ML);
    console.log("ml url", process.env.THISTOKENAPI);

    const hola = await MLReportProduct();
    console.log('hola', hola.data.results[0])
});

