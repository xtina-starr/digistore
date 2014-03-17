App.OrdersRoute = Ember.Route.extend({
  actions: {
    checkout: function(proxy) {
      var order = this.store.createRecord("order", proxy);
      this.store.find('cart', 1).then(function (cart) {
        order.set('cart', cart)
      })

      order.save();
      this.transitionTo("confirmation", order)
    }
  },
  model: function () {
    return {};
  }
});