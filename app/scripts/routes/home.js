App.HomeRoute = Ember.Route.extend({
  model: function () {
      return this.store.find("product", {popular: true})
    }
});