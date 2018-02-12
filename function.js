// jquery library should be included

$(document).ready(function($){
  // handle the trigger
  $('.thumbs img').click(function(){
    // save the image src of the clicked
    var new_src = $(this).attr('src');
    // make the thumb active
    $('.thumbs .active').removeClass('active');
    $(this).parent().addClass('active'); 
    // replace the big image
    $('.gal-wrap .large img').attr('src', new_src);
  });
});