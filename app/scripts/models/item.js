App.Item = DS.Model.extend({
  product: DS.belongsTo("product", {async: true}),
  quantity: DS.attr("number")
})

App.Item.FIXTURES = [
  { id: 1,
    product: 2,
    quantity: 2
  },
  {
    id: 2,
    product: 1,
    quantity: 3
  },
  {
    id: 3,
    product: 3,
    quantity: 1
  }
]