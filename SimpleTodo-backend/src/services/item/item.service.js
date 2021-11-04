// Initializes the `item` service on path `/items`
const { Item } = require('./item.class');
const createModel = require('../../models/item.model');
const hooks = require('./item.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/items', new Item(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('items');

  service.hooks(hooks);
};
