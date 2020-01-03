const BrandsRouter = require('./routes/BrandsRouter');
const ItemsRouter = require('./routes/ItemsRouter');

const routes = app => {
  app.use('/api/v1/brands', BrandsRouter);

  app.use('/api/v1/items', ItemsRouter);
};

module.exports = routes;
