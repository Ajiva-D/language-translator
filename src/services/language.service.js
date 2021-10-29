/* eslint-disable no-unused-vars */
/* eslint-disable import/no-self-import */
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
  }
  if (query.ibibio) {
    const foundTranslation = await Language.findOne({ ibibio: query.ibibio });
    if (!foundTranslation) {
      throw new ApiError(httpStatus.UNAUTHORIZED, `Translation not found`);
    }
    return foundTranslation;
  }
  if (query.igbo) {
    const foundTranslation = await Language.findOne({ igbo: query.igbo });
    if (!foundTranslation) {
      throw new ApiError(httpStatus.UNAUTHORIZED, `Translation not found`);
    }
    return foundTranslation;
  }
  if (query.ijaw) {
    const foundTranslation = await Language.findOne({ ijaw: query.ijaw });
    if (!foundTranslation) {
      throw new ApiError(httpStatus.UNAUTHORIZED, `Translation not found`);
    }
    return foundTranslation;
  }
};

const adminGetAllTranslations = async () => {
  try {
    const allTranslations = await Language.find();
    return allTranslations;
  } catch (error) {
    logger.error(error);
  }
};

/**
 *
 * @param {string} user
 * @param {string} money
 * @returns {Promise<User>}
 */

const saveWord = async (body) => {
  const { english, ibibio, ijaw, igbo } = body;
  try {
    const savedWord = new Language({
      english,
      ibibio,
      ijaw,
      igbo,
    });
    await savedWord.save();
    console.log(savedWord);
    return savedWord;
  } catch (error) {
    logger.error(error);
  }
};

const updateWord = async (query, body) => {
  try {
    const updatedWord = await Language.updateOne({ _id: query }, { ...body });
    return updatedWord;
  } catch (error) {
    logger.error(error);
  }
};

const deleteWord = async (query) => {
  try {
    const deleted = await Language.deleteOne({ _id: query });
    return {
      message: 'successfully deleted',
    };
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  getTranslation,
  saveWord,
  updateWord,
  deleteWord,
  adminGetAllTranslations,
};
