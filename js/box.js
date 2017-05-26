const $ = require('jquery');

$(document).ready(function(){
  $('div').mouseover(function() {
    $(this).css('backgroundColor', 'pink')
  });
  $('div').mouseleave(function(){
    $(this).css('backgroundColor', 'white')
  })
  $('#main').css('color', 'green');

  $('#box').css('color', 'blue');
})
