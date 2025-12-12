const express = require('express');
const app = express();
const port = 9005;
const db = require('./config/mongoose')
const User = require('./models/users')

app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use('/',require('./routes'))
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/",(req,res)=>{
    return res.redirect('/login');
})
app.get("/home",(req,res)=>{
    return res.render('home');
})
app.get("/login",(req,res)=>{

    return res.render('login');
})
// const bcrypt = require("bcrypt");

app.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            console.log("User does not exists!")
            return res.redirect("/login");
        }

        if (req.body.password=== user.password) return res.redirect("/home");
        else return res.redirect("/login");

    } catch (err) {
        console.log(err);
        return res.redirect("/login");
    }
});

app.get("/signup",(req,res)=>{
    return res.render('signup');
})
app.post("/signup",(req,res)=>{
    try{
        User.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
            remember:req.body.remember,

        })

    }
    catch(error){
        console.error(error);

    }

    setTimeout(() => {
        return res.redirect('/login');
    }, 2000);
    
})
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
