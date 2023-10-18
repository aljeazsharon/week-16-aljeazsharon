const User = require ("../model/User");
const BaseAuth = require ("./base");

class JWTAuthCookies extends BaseAuth {
    async getUser(req) {
        const token = req.cookies?.accesToken;
        console.log("JWTAUTHCookies");
        console.log("=" * 50);
        console.log(token);
        if (token) {
            const _user = await User.parseTokenSafe(token);
            if (!_user) return null;
            return _user;
        }
        return null;
    }
}

module.exports = JWTAuthCookies;