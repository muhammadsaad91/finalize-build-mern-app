const express = require('express');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());


require('../db/conn');
const User = require('../model/Schema');

// router.get('/', (req, res) => {
//     res.send('Hello World!  saad is here at login at auth page')
// })

router.post('/register', async (req, res) => {
    const { name, username, phonenumber, password, confirmpassword } = req.body;
    if (!name || !username || !phonenumber || !password || !confirmpassword) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    try {
   const user = await User.findOne({ username: username })

   if (user) return res.status(400).json({ msg: `${username} already exists` });
    const newUser = new User({
        name,
        username,
        phonenumber,
        password,
        confirmpassword
    });
   
    if (password !== confirmpassword) {
        return res.status(400).json({ msg: 'Passwords do not match' });
    }

    await newUser.save();

    res.json({ msg: 'User created' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);


router.post('/signin', async (req, res) => {
   try{
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ msg: 'Please Fill all fields' });
    }
    const user = await User.findOne({ username });
     if (user){
            if(user.password !== password){
                return res.status(400).json({ msg: 'Password is wrong' });
            }
            
            const token = await user.generateAuthToken();
            console.log(token);
            
            res.cookie('token', token),{
            httpOnly: true
            }
            res.status(200).json({ msg: 'Successfully logged in', token });
        }else{
            return res.status(400).json({ msg: 'User does not exist' });
        }


    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

   
router.get('/welcom', authenticate, async (req, res) => {
    console.log('welcom mai a gaya');
    res.send(req.user);

}
);

  
router.get('/logout', authenticate, async (req, res) => {
            res.clearCookie('token' ,{ path: '/' });
            res.status(200).json({ msg: 'Successfully logged out' });
}
);

module.exports = router;

        