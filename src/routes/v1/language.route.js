/* eslint-disable no-unused-vars */
const express = require('express');
const auth = require('../../middlewares/auth');
const languageController = require('../../controllers/language.controller');

const router = express.Router();

router.get('/', languageController.getTranslation);
router.post('/', languageController.saveWord);
router.patch('/:id', languageController.updateWord);
router.delete('/:id', languageController.deleteWord);
router.get('/admin/all', languageController.adminGetAllTranslations);

module.exports = router;
