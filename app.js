const express = require("express")
const app = express()
const port = 3300
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





////////////////////////////fichier des document js et css et autre\\\\\\\\\\\\\\\\\\\\\\\\\
const path = require("path")
const publicDir = path.join(__dirname, 'public')  
app.use(express.static(publicDir))
/////////////////////////////////////////////////////////////////////////////////
app.use('/auth', require('./rooters/auth'))





////////////////////////show first page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
app.get('/', (req, res) => res.render('indx'))

//////////////////////////data base connection\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const mysql = require('mysql2')
const dabase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ged2024",
    database: "ged"
})
app.set('view engine', 'hbs')
dabase.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("database connected");
    }
})
///////////////////////////////pour lire les donne envoyer du form\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
app.use(express.urlencoded({ extended: false }));
app.use(express.json());











app.listen(port, () => console.log(`Example app listening on port ${port}!`))
