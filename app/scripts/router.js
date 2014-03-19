App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("products", function (){
    this.resource("product", { path: ":product_id" })
  })
  this.resource("cart")
  this.resource("orders")
  this.resource("confirmation", { path: "confirmation/:order_id" })
  this.resource("admin", function (){
    this.resource("newProduct", { path: "products/new"});
    this.resource("editProduct", { path: ":product_id"})
  })
});