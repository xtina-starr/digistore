Ember.Handlebars.helper('subtotal', function() {
  return (price * quantity) / 100
});