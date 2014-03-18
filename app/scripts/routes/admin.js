App.AdminRoute = Ember.Route.extend({
  actions: {
    createProduct: function (proxy) {
      var product = this.store.createRecord("product", proxy)
      product.save();
    }
  },
  model: function () {
    return this.store.find("product");
  }
});