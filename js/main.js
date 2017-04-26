$(function () {

  $('#section').change(function (event) {
    event.preventDefault();
    $('header').css('height', 'auto');
    $('.loading').before('<img src="assets/images/ajax-loader.gif" id="loading-gif">');

  });
});