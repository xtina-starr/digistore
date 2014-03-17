App.Order = DS.Model.extend({
  first_name: DS.attr("string"),
  last_name: DS.attr("string"),
  email: DS.attr("string"),
  credit_card: DS.attr("number"),
  cvv: DS.attr("number"),
  expiration_date: DS.attr("number"),
  status: DS.attr("boolean"),
  cart: DS.belongsTo("cart", {async: true})
})

App.Order.FIXTURES = [{
  id: 1,
  first_name: "Ada",
  last_name: "Lovelace",
  email: "ada@lovelace.com",
  credit_card: 123456789,
  cvv: 123,
  expiration_date: 112018,
  status: true,
  cart: 1
}]