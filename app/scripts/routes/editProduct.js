App.EditProductRoute = Ember.Route.extend({
  actions: {
    updateProduct: function (product) {
      product.save().then(function (product) {
        transitionTo("admin", product)
      })
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
});