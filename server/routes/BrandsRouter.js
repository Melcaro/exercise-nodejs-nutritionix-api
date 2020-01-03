const router = require('express').Router();
const BrandsCtrl = require('../controllers/BrandsController');

router.get('/', BrandsCtrl.getBrandsByTheme);

router.get('/:brandID', BrandsCtrl.getBrandMenuByID);

module.exports = router;
