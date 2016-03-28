var BookLookApp = function () {

  var newBook = function () {
    var title = $('.title').val();
    var auth = $('.auth').val();
    var desc = $('.desc').val();
    var img = $('.img').val();
    var pg = $('.pg').val();
    var ti = $('.ti').val();

    var book = { 
        title: title,
        auth: auth,
        desc: desc,
        img: img,
        pg: pg,
        ti: ti
      }
    ;

    return book;
  }

  var handlebarIt = function () {
    var book = newBook();

    var source = $('#result-template').html();

    var template = Handlebars.compile(source);

    var newHTML = template(book);

    $('.book-look').append(newHTML);

  }

  return {
    newBook: newBook,
    handlebarIt: handlebarIt
  }

}

var app = BookLookApp();

$('#search-btn').click( function (e) {
  e.preventDefault();


  // creates an object so we can handlebar it
  app.newBook();
  // now we get it handled!
  app.handlebarIt();

});

