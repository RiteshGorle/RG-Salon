//SECTION 03: PRELOADER START

$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    
    if ($('#container').hasClass('loaded')) {
      
      $('#preloader').delay(110).queue(function() {
        $(this).remove();
      });}
  }, 500);});

//SECTION 03: PRELOADER END

