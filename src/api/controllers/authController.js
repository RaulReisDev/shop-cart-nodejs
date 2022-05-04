const authService = require('../services/authService')

const auth0 = async (req, res) => {

    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');

}

const profile = async (req, res) => {

    res.send(JSON.stringify(req.oidc.user));

}


module.exports = {
    auth0,
    profile
}