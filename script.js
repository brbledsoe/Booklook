var BookLookApp = function () {

  var data;  

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

    return book;
  }

  var handlebarIt = function () {
    var book = newBook();

    var source = $('#result-template').html();

    var template = Handlebars.compile(source);

    var newHTML = template(book);

    $('.book-look').append(newHTML);

  }

  var fetch = function () {
  $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=0439023521',
      dataType: "json",
      success: function(data) {
        console.log(data);
        data(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  var dat = function (arg) {
        console.log(arg.items[0].volumeInfo.title);
  };

  return {
    newBook: newBook,
    handlebarIt: handlebarIt,
    fetch: fetch,
    dat: dat
   
  }

}

var app = BookLookApp();

$('#search-btn').click( function (e) {
  e.preventDefault();


  // creates an object so we can handlebar it
  app.newBook();
  // now we get it handled!
  app.handlebarIt();
  // fetch from google api
  app.fetch();

  app.dat();
 

});

