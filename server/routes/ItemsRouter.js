const router = require('express').Router();
const ItemsCtrl = require('../controllers/ItemsController');

router.get('/:itemID', ItemsCtrl.getItemDataById);

module.exports = router;
