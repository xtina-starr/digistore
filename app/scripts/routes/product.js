App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      var store = this.store;
      this.store.find("cart", 1).then(function (cart){
        var item = store.createRecord("item", {
          quantity: 1,
          price: product.get("price"),
          product: product,
          cart: cart
        })
        cart.get("items").then(function (items) {
          items.pushObject(item);
        })

        item.save();
      });

      this.transitionTo("cart")
      // this.store.createRecord("product", {
      //   cart: 1,
      //   product: product,
      //   quantity: 1
      // });
      // this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id)
  }
});