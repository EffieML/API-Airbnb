const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

//signup request key of username,email,password
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('First Name is required'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Last Name is required'),
    handleValidationErrors
];

// Sign up
router.post('/', validateSignup, async (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;
    const checkEmail = await User.findOne({
        where: {
            email: email
        }
    })
    if (checkEmail) {
        res.status(403);
        return res.json({
            message: "User already exists",
            statusCode: 403,
            errors: { email: "User with that email already exists" }
        })
    }

    const checkUser = await User.findOne({
        where: {
            username: username
        }
    })
    if (checkUser) {
        res.status(403);
        return res.json({
            message: "User already exists",
            statusCode: 403,
            errors: { email: "User with that username already exists" }
        })
    }

    const user = await User.signup({ firstName, lastName, username, email, password });

    const token = await setTokenCookie(res, user);
    const userJSON = user.toJSON();
    userJSON.token = token;

    return res.json(
        userJSON
    );
}
);



module.exports = router;


// window.store.dispatch(window.sessionActions.signup({
//     firstName: 'New',
//     lastName:'User',
//     username: 'NewUser',
//     email: 'new@user.io',
//     password: 'password'
//   }));
