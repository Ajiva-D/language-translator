const express = require('express');
const auth = require('../../middlewares/auth');
const languageController = require('../../controllers/language.controller');

const router = express.Router();

router.get('/', languageController.getTranslation);
router.post('/', languageController.saveWord);

module.exports = router;
