const axios = require('axios');
const auth = require('../services/auth');

const BASE_URL = 'https://api.nutritionix.com/v1_1';

const fetchBrandsByTheme = async theme => {
  return await axios.get(`${BASE_URL}/brand/search`, {
    params: { query: { theme }, appId: auth.appId, appKey: auth.appKey },
  });
};

module.exports = { fetchBrandsByTheme };
