const jwt = require('jsonwebtoken');
const User = require('../model/Schema');

const authenticate = async (req, res, next) => {
    try {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    if (!user) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
    req.user = user;
    req.token = token;
    req.userID = user._id;
     

        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg: 'Server Error'});
    }
}
module.exports = authenticate;
