const express = require('express');
const authRoute = require('./auth.route');
const languageRoute = require('./language.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/language', languageRoute);

module.exports = router;
