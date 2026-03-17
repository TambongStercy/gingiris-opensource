require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');

const uri = process.env.MONGODB_URI|| 'mongodb://127.0.0.1:27017/CESA';

const app = express();

const server = require("http").createServer(app);


app.use(express.static("public"));

app.use(express.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true });


const User = require("./model/user_model");

app.get("/", async (req, res)=>{
    res.render("login.ejs");
});


app.post("/vote", async (req,res)=>{

    const phone = Number(req.body.tel);
    const name = req.body.name.toUpperCase().trim();
    const matricule = req.body.matricule.toUpperCase().trim();
    const email = req.body.email.toLowerCase().trim();

    const user = await User.findOne({
        phone: phone,
        name: name,
        matricule: matricule,
        email: email,
    });

    if(!user){
        return res.redirect('/');
    }

    res.render('form.ejs')
});



app.use("/*", (req,res)=>res.redirect("/"))


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("Server running on port: " + port);
});

