const axios = require('axios');
const auth = require('../services/auth');

const BASE_URL = 'https://api.nutritionix.com/v1_1';

const fetchBrandsByTheme = async theme => {
  return await axios.get(`${BASE_URL}/brand/search`, {
    params: { query: theme, appId: auth.appId, appKey: auth.appKey },
  });
};

const fetchBrandMenuByID = async brandID => {
  return await axios.get(`${BASE_URL}/search/`, {
    params: { brand_id: brandID, appId: auth.appId, appKey: auth.appKey },
  });
};

const fetchItemDataByID = async itemID => {
  try {
    return await axios.get(`${BASE_URL}/item`, {
      params: { id: itemID, appId: auth.appId, appKey: auth.appKey },
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchBrandsByTheme, fetchBrandMenuByID, fetchItemDataByID };
