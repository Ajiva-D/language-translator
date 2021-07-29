const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { languageService } = require('../services');

/**
 * Get translation
 * @public
 */
const getTranslation = catchAsync(async (req, res) => {
  const languageResponse = await languageService.getTranslation(req.query);
  res.status(httpStatus.OK).json(languageResponse);
});

/**
 * Save word
 * @public
 */
const saveWord = catchAsync(async (req, res) => {
  const response = await languageService.saveWord(req.body);
  res.status(httpStatus.OK).json(response);
});

module.exports = {
  getTranslation,
  saveWord,
};
