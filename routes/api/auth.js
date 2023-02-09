const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const auth = require('../../middleware/auth');



// Item Model 
const User = require('../../models/User')


// Post request  
router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: ' Enter Username & Password' })
    }

    User.findOne({ username })            // {email : email} ---> just {email}  because they are same
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exits' })

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(404).json({ msg: 'bad Credidentials' })

                    jwt.sign(
                        { id: user.id },   //payload e.g.  data
                        config.get('jwtSecret'),             //secret key
                        // { expiresIn: 3600 },              // 3600 seconds ( optional )
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.name,
                                    password: user.password
                                }
                            })
                        }
                    );
                });


        });
});



router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
});



module.exports = router;