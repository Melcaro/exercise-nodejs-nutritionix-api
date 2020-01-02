const router = require('express').Router();
const BrandsCtrl = require('../controllers/BrandsController');

router.get('/', BrandsCtrl.getBrandsByTheme);

module.exports = router;
