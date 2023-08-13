const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/user.controller');
const verifyAccessToken = require('../../../middleware/user.middleware');

router.route('/')
    .get(userController.getUser)
    .post(verifyAccessToken, userController.createUser)

router.route('/logged-user').get(verifyAccessToken, userController.getLoggedUser)

router.route('/login').post(userController.loginUser)

module.exports = router;