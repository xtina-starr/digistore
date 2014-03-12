Ember.Handlebars.helper('format-price', function(price, quantity) {
  return (price * quantity) / 100
});