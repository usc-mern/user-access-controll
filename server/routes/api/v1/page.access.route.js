const express = require('express');
const router = express.Router();
const verifyAccessToken = require('../../../middleware/user.middleware');
const pageController = require('../../../controllers/page.access.controller');

router.route('/')
    .get(pageController.getPageInfo)
    .post(pageController.createPage)

module.exports = router;