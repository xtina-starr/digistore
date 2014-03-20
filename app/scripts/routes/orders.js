App.OrdersRoute = Ember.Route.extend({
  actions: {
    checkout: function(proxy) {
      var order = this.store.createRecord("order", proxy);
      this.store.find('cart', localStorage.cartId).then(function (cart) {
        order.set('cart', cart)
      })
      var self = this
      order.save().then(function (order) {
          self.transitionTo("confirmation", order)
        }, function (error) {
          order.deleteRecord();
          alert("Your order could not be processed.")
        }
      ) 
    }
  },
  model: function () {
    return {};
  }
});