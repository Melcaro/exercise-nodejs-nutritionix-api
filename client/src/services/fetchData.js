import axios from 'axios';

export const getBrandsByTheme = async () => {
  const theme = 'burger';
  return await axios.get('/api/v1/brands', {
    params: { query: theme },
  });
};
