
$(function() {
    //cache the window object
    var $window = $(window);
  
    //parallax background effect
    $('section[data-type="background"]').each(function(){
  
      var $bgobj = $(this); //assigning the object
  
      $(window).scroll(function(){
  
        //scroll the bg at var speed
        //the yPos is negative because we are scrolling it up
  
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
  
        //put together our final bg position
        var coords = '50% '+ yPos + 'px';
  
        //move the bg
        $bgobj.css({ backgroundPosition: coords });
  
      }); //end window scroll
  
    });
  });
  
  