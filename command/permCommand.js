const { PermissionMongo } = require ("../model/UserMongo");
const mongoose = require ("mongoose");
require ("dotenv").config();

const main = async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => console.log("Database Connect Success!")).catch(err => console.error("Connection Error", err));

    const permissions = [
        {
            name: "superuser",
            descRole: "admin role",
            typeRole: "role"
        },

        {
            name: "user",
            descRole: "user role",
            typeRole: "role"
        },

        {
            name: "member",
            descRole: "member role",
            typeRole: "role"
        }
    ]

    try {
        for (let perm of permissions) {
            await PermissionMongo.create(perm);
        }
    }
    catch (e) {
        console.log(e);
    }
    finally {
        mongoose.connection.close();
    }
}

module.exports = main;