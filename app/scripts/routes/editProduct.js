App.EditProductRoute = Ember.Route.extend({
  actions: {
    updateProduct: function (product) {
      var self = this
      product.save().then(function (product) {
        self.transitionTo("admin")
      })
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id);
  }
});