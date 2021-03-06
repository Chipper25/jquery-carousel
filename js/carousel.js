$(function(){

  var numberSlides = $('.slide').size();
  var slideWidth = $('.slide').width();
  var scrollValue = 0;

  // set the width #tray
  $('#tray').width(numberSlides * slideWidth);

  $('#next').click(function(event){
    event.preventDefault();
    scrollValue += 1;
    var position = scrollValue * slideWidth;
    $('#tray').animate({right: position}, 400);
  });

  $('#prev').click(function(event){
    event.preventDefault();
    scrollValue -= 1;
    var position = scrollValue * slideWidth;
    $('#tray').animate({right: position}, 400);
  });

});