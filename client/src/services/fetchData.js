import axios from 'axios';

export const getBrandsByTheme = async () => {
  const theme = 'burger';
  return await axios.get('/api/v1/brands', {
    params: { query: theme },
  });
};

export const getBrandMenuByID = async brandID => {
  return await axios.get(`/api/v1/brands/${brandID}`);
};

export const getItemDataByID = async itemID => {
  return await axios.get(`/api/v1/items/${itemID}`);
};
