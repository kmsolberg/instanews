$(function () {
  
  $('#section').change(function (event) {
    event.preventDefault();
    $('header').css('height', 'auto');
    $('.loading').before('<img src="assets/images/ajax-loader.gif" id="loading-gif">');
    var selection = $('#section option').filter(':selected').val();
    var url = "https://api.nytimes.com/svc/topstories/v2/" + selection + ".json"
    console.log(url);
        url += '?' + $.param({'api-key': "c15852cbf6e143a28c25363796863ee0"
        });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    });
  });
});

// $.ajax({
//       method: 'GET',
//       dataType: 'jsonp',
//       url: 'https://itunes.apple.com/search?entity=album&limit=6&term=' + artist, 
//     }).done(function(data) {
//       console.log(data);
//       $.each(data.results, function( key, value ){
//         console.log(value)
//         albumList += '<li><img src=' + value.artworkUrl60 + '>' + value.collectionName + '</li>'
//     });