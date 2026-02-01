const User = require('../models/users')




module.exports.createUser= (req,res)=>{
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

    return res.status(200).json({
    success: true,
    message: "User created successfully"
    });

  
    
}
















module.exports.logininto = async (req, res) => {
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
}



module.exports.redirect =  (req,res)=> {
    return res.redirect('/login');
}


module.exports.login =  (req,res)=>{
    return res.render('login',{
        title: 'Splitwise | Login'
    });
}

module.exports.signup =  (req,res)=>{
    return res.render('signup',{
        title: 'Splitwise | Signup'
    });
}

module.exports.home =  (req,res)=>{
    return res.render('home',{
        title:'Home'
    });
}