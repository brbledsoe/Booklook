var BookLookApp = function () {

  var _search = function () {
    var num = $('#searchISBN').val();

    var url = 'https://www.googleapis.com/books/v1/volumes?q=' + num;

    return url;
  }
  
  var fetch = function () {
  $.ajax({
      method: "GET",
      url: _search(),
      dataType: "json",
      success: function(data) {
        // console.log(data);
        _newBook(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  var _newBook = function (arg) {
    var title = arg.items[0].volumeInfo.title;
    var auth = arg.items[0].volumeInfo.authors[0];
    var desc = arg.items[0].volumeInfo.description;
    var img = arg.items[0].volumeInfo.imageLinks.thumbnail;
    var pg = arg.items[0].volumeInfo.pageCount;

    var book = { 
        title: title,
        auth: auth,
        desc: desc,
        img: img,
        pg: pg,
      }

    _handlebarIt(book);
  }

  var _handlebarIt = function (book) {

    var source = $('#result-template').html();

    var template = Handlebars.compile(source);

    var newHTML = template(book);

    $('.book-look').append(newHTML);

  }

  return {
    fetch: fetch,  
  }

}

var app = BookLookApp();

$('#search-btn').click( function (e) {
  e.preventDefault();

  app.fetch();

});

