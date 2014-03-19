App.NewProductRoute = Ember.Route.extend({
  actions: {
    createProduct: function (proxy) {
      var self = this
      var product = this.store.createRecord("product", proxy)
      product.save().then(function (product) {
        self.transitionTo("admin", product)
      })
    }
  },
  model: function () {
    return {};
  }
})