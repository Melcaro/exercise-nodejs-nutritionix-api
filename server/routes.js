const BrandsRouter = require('./routes/BrandsRouter');

const routes = app => {
  app.use('/api/v1/brands', BrandsRouter);
};

module.exports = routes;
