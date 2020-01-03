const BrandsStore = require('../stores/BrandsStore');

const getItemDataById = async (req, res) => {
  const { itemID } = req.params;
  const { data: itemData } = await BrandsStore.fetchItemDataByID(itemID);
  res.send(itemData);
};

module.exports = { getItemDataById };
