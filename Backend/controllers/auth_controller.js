const { default: axios } = require("axios");
const { oauth2Client } = require("../config/googleConfig");
const User = require("../models/users");
const jwt = require('jsonwebtoken');
const googleLogin = async (req, res) => {
    try {
        console.log("google Login funtion in backend");
        const {code} = req.query;
        console.log("authcode in backend",code);
        const googleResponse  = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleResponse.tokens); 
        console.log(googleResponse.tokens);

        const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`);
        const {email, name, picture} = userInfoResponse.data;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({
                firstname:name,
                lastname:'',
                email,
                image: picture,
                password: '',
                remember: false
            });
        }
        const {_id} = user;
        const token = jwt.sign({_id, email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIMEOUT});
        return res.status(200).json({
                message: 'Login successful',
                token, user
            }
        );
        
        
    } catch (error) {
        return res.status(500).json({
            message: 'Login failed',
            error: error.message
        });
    }
}

module.exports = {
    googleLogin
}
