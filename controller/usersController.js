const User = require("../model/User");
const cache = require("memory-cache");

const sendEmail = (email, key) => {
    console.log(`Subject: Request Reset Password`);
    console.log(`to: ${email}`);
    console.log(`Body: click this link, http://localhost:3000/reset?key=${key}`);
};

exports.loginSession = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.get({username: username});
    const isAuth = await User.authenticate(user.username, password);
    if (!user || !isAuth) {
        res.status(401).json ({
            error: "Invalid Username/Password"
        });
        return;
    }

    const {accessToken, expireAt, refreshToken, refreshExpireAt} = User.generateToken(user);
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        expire: expireAt
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        expire: refreshExpireAt
    })

    res.json();
};

exports.logout = async (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.json();
};

exports.resetPasswordReq = async (req, res) => {
    const {email} = req.body;
    const user = await User.get({email: email});
    if(!user) {
        res.status(400).json({
            error
        });
        return;
    }

    const key = Math.random().toString(36).substring(2, 15);
    cache.put(key, user.email, 30 * 1 * 1000);
    sendEmail(user.email, key);
    res.json({
        message: "Link Reset Password Has Been Sent to Your Email!"
    });
};

exports.resetPassword = async (req, res) => {
    const {password} = req.body;
    const {key} = req.query;
    const email = cache.get(key);
    console.log(key);
    console.log(email);
    console.log(cache.keys());

    if(!email) {
        res.status(400).json({
            error: "TOKEN INVALID!"
        });
        return;
    }

    const user = await User.get({
        email: email
    });

    if(!user) {
        res.status(400).json({
            error: "ERROR"
        });
        return;
    };
    await user.updateOne({password: User.make_password(password)});
    
    cache.del(key);
    res.json("Success Reset Password!");
};