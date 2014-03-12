Ember.Handlebars.helper('format-price', function(price) {
  return parseFloat(price)/100
});