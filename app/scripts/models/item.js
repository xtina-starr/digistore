App.Item = DS.Model.extend({
  product: DS.belongsTo("product", {async: true}),
  quantity: DS.attr("number"),
  cart: DS.belongsTo("cart", {async: true}),
  current_price: DS.attr("number"),
  subtotal: function() {
    return this.get("quantity") * this.get("current_price");
  }.property("quantity", "current_price")
});

App.Item.FIXTURES = [
  { id: 1,
    product: 2,
    quantity: 2,
    current_price: 115
  },
  {
    id: 2,
    product: 1,
    quantity: 3,
    current_price: 145
  },
  {
    id: 3,
    product: 3,
    quantity: 1,
    current_price: 188
  }
]