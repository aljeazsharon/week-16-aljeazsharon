const {UserMongo} = require ("./UserMongo");

exports.allowesRole = async (user, perm) => {
    await UserMongo.findOneAndUpdate({_id: user._id}, {$addToSet: { permissions: perm }});
}

exports.deniesRole = async (user, perm) => {
    user.permissions.pull(perm);
    await user.save();
};