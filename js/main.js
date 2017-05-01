$(function () {
  var storyGrid = "";
  var picture = "";
  var link = "";

  $('select').selectric();
 
  $('#section').change(function (event) {
    var index = 0;
    event.preventDefault();
    $('.header-landing').removeClass().addClass('short-header');
    $('.stories').empty();
    $('.loading').before('<img src="assets/images/ajax-loader.gif" id="loading-gif">');
    var selection = $('#section option').filter(':selected').val();
    var urlSource = "https://api.nytimes.com/svc/topstories/v2/" + selection + ".json"
        urlSource += '?' + $.param({'api-key': "c15852cbf6e143a28c25363796863ee0"
        });
      $.ajax({
      url: urlSource,
      method: 'GET',
    }).done(function(data) {
      var array = data.results.filter(function(el){
        return el.multimedia.length;
      }).slice(0, 12);

      $.each(array, function ( key, value ) {
      link = value.url,
      picture = value.multimedia[4].url,
      storyGrid = '<a href=' + link + '>' + '<li id="story" style="background-image:url(' + picture + ')">' 
      + '<p>' + value.abstract + '</p></li></a>';
      $('.stories').append(storyGrid);
      });
    }).fail(function () {
        $('.stories').append('<li>"Error, Try Again Later"</li>');
    }).always(function() {
        $('#loading-gif').remove()
    });
  });
});