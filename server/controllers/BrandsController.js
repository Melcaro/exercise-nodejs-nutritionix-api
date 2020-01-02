const BrandsStore = require('../stores/BrandsStore');

const getBrandsByTheme = async (req, res) => {
  const { query } = req.query;
  const {
    data: { hits: brandsList },
  } = await BrandsStore.fetchBrandsByTheme(query);
  res.send(brandsList);
};

module.exports = { getBrandsByTheme };
