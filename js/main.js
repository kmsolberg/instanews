$(function () {
  var storyGrid = "";
  var picture = "";
  var results = "";
  var link = "";
 
  $('#section').change(function (event) {
    var index = 0;
    event.preventDefault();
    $('header').css('height', 'auto');
    $('.loading').before('<img src="assets/images/ajax-loader.gif" id="loading-gif">');
    var selection = $('#section option').filter(':selected').val();
    var urlSource = "https://api.nytimes.com/svc/topstories/v2/" + selection + ".json"
        urlSource += '?' + $.param({'api-key': "c15852cbf6e143a28c25363796863ee0"
        });
    $.ajax({
    url: urlSource,
    method: 'GET',
  }).done(function(data) {
      $.each(data.results, function ( key, value ) {
        if (value.multimedia[4]) {
            if (index < 12) {
              picture = value.multimedia[4].url,
              link = value.url,
              storyGrid = '<li><img src="' + picture + '">' + value.abstract + '</li>';
              $(storyGrid).wrap('<a' + link + '/>');  
              index++
              $(".stories").append(storyGrid);
            }
        }
      })
    });
  });
});