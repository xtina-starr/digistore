App.Product = DS.Model.extend({
  title: DS.attr("string"),
  artist: DS.attr("string"),
  genre: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string")
});

App.Product.FIXTURES = [
  {
    id: 1,
    title: "Bam Bam",
    artist: "Chaka Demus & Pliers",
    genre: "Reggae",
    price: 115,
    image: "http://www.zikopole.com/zik/images/03046686-30529203720pm305-5bfc36b0%5B1%5D.jpg"
  }, {
    id: 2,
    title: "Aerosol Can (feat. Pharrell)",
    artist: "Major Lazer",
    genre: "Electronic Dance Music",
    price: 145,
    image: "http://mad-decent-wp.s3.amazonaws.com/wp-content/uploads/2014/01/front-hires-web.jpg"
  }, {
    id: 3,
    title: "Kiss",
    artist: "Prince",
    genre: "Pop",
    price: 188,
    image: "http://patrickmiguelbishop.files.wordpress.com/2011/01/kiss3.jpg"
  }
]
