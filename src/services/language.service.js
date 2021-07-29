/* eslint-disable radix */
const crypto = require('crypto');
const httpStatus = require('http-status');
const config = require('../config/config');
// eslint-disable-next-line import/order
const Language = require('../models/language.model');
const userService = require('./user.service');
const languageService = require('./language.service');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');

/**
 *
 * @param {string} user
 * @param {string} money
 * @returns {Promise<User>}
 */

const getTranslation = async (query) => {
  if (query.english) {
    const foundTranslation = await Language.findOne({ english: query.english });
    if (!foundTranslation) {
      throw new ApiError(httpStatus.UNAUTHORIZED, `Translation not found`);
    }
    return foundTranslation;
  } else if (query.ibibio) {
    const foundTranslation = await Language.findOne({ ibibio: query.ibibio });
    if (!foundTranslation) {
      throw new ApiError(httpStatus.UNAUTHORIZED, `Translation not found`);
    }
    return foundTranslation;
  }
};

/**
 *
 * @param {string} user
 * @param {string} money
 * @returns {Promise<User>}
 */

const saveWord = async (body) => {
  try {
    console.log(body);

    const { english, ibibio } = body;
    const savedWord = await Language.create({
      english,
      ibibio,
    });
    return savedWord;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  getTranslation,
  saveWord,
};
