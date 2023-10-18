const express = require ("express");
const app = express();
const applyMiddleware = require ("./middleware");
const {loginLimiter, recipeslimiter} = require("./middleware/rateLimit");
const User = require ("./model/User");
const {allowesRole, deniesRole} = require ("./model/Permissions");
const {PermissionMongo} = require ("./model/UserMongo");
const recipesRoute = require("./routes/recipes");
const usersController = require("./controller/usersController");
const permissions = require("./permission");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Database is Connect")).catch(err => console.error("Connection Error", err));

applyMiddleware(app);

//Homepage
app.get('/', (req, res) => {
    console.log(req.cookies, "COOKIES");
    console.log(req.user, "<============= USER");
    res.send("ASSIGNMENT WEEK 16");
});

//Register
app.post('/register', async(req,res) => {
    const {username, email, password} = req.body;
    const user = await User.create({username, email, password});
    const userPermission = await PermissionMongo.findOne({name: "user"})
    await allowesRole(user, userPermission);
    const responseToken = User.generateToken(user);
    res.status(201).json(responseToken);
});

//Login
app.post('/login', loginLimiter, async(req, res) => {
    const {username, password} = req.body;
    const user = await User.get({username});
    const is_authenticated = await User.authenticate(username, password);
    if(!user || !is_authenticated) {
        res.status(401).json({
            error: "Username/Password is Invalid!"
        });
        return;
    }

    const responseToken = User.generateToken(user);
    res.json(responseToken);
});

//Login with Session and Cookie
app.post('/loginsession', loginLimiter, usersController.loginSession);

//Logout
app.post('/logout', usersController.logout);

//Roles Allow
app.post('/allow', async(req, res) => {
    const {username, permission} = req.body;
    const perm = await PermissionMongo.findOne({name: permission});
    const user = await User.get({username});
    await allowesRole(user, perm);
    res.json({message: "SUCCESS!"});
});

//Remove Roles
app.post('/deny', async(req, res) => {
    const {username, permission} = req.body;
    const perm = await PermissionMongo.findOne({name: permission});
    const user = await User.get({username});
    await deniesRole(user, perm);
    res.json({message: "SUCCESS!"});
});

//Get Information About User
app.get('/user', permissions.is_authenticated, async(req, res) => {
    const user = req.user;
    res.json(user);
});

//Get Information About Member
app.get('/member', permissions.is_member, async(req,res) => {
    const user = req.user;
    res.json(user);
});

//Get Admin
app.get('/admin', permissions.is_superuser, async(req, res) => {
    const user = req.user;
    res.json(user);
});

//Refresh Token
app.post('/refresh', async(req, res) => {
    const {refreshToken} = req.body;
    const user = await User.parseTokenSafe(refreshToken);
    if(!user) return res.status(401).json({
        message: "TOKEN INVALID!"
    });

    const responseToken = User.generateToken(user);
    res.json(responseToken);
});

//Request Reset Password
app.post('/request', usersController.resetPasswordReq);

//Reset Password
app.post('/reset', usersController.resetPassword);

//Recipes
app.use('/recipes', recipeslimiter, recipesRoute);

//PORT
const server = app.listen(3000, () => {
    console.log('Server running on localhost:3000')
});