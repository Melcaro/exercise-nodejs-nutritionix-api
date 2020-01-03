const BrandsStore = require('../stores/BrandsStore');

const getBrandsByTheme = async (req, res) => {
  const { query } = req.query;
  const {
    data: { hits: brandsList },
  } = await BrandsStore.fetchBrandsByTheme(query);
  res.send(brandsList);
};

const getBrandMenuByID = async (req, res) => {
  const { brandID } = req.params;
  const {
    data: { hits: brandMenu },
  } = await BrandsStore.fetchBrandMenuByID(brandID);
  res.send(brandMenu);
};

module.exports = { getBrandsByTheme, getBrandMenuByID };
