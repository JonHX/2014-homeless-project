  jQuery(document).ready(function($){
       // uses the div .trackOverlay with a high z-index to track mouse movement so that the mouse tracking isn't interupted by overlaying div's.
      // I could not find the fix to this problem and after coming back to it after hours of trying different techniques i found my own fix I may even publish online.
      // The original code is provided with a free to use opensource by https://www.shinyface.com/2010/09/04/simple-parallax-with-jquery/ https://en.wikipedia.org/wiki/MIT_License
      
            $('.trackOverlay').mousemove(
                    function(e){
                    /* Work out mouse position */
                        e.stopPropagation();
                    var offset = $(this).offset();
                    var xPos = e.pageX - offset.left;
                    var yPos = e.pageY - offset.top;
                 
                    /* Get percentage positions */
                    var mouseXPercent = Math.round(xPos / $(this).width() * 40);
                    var mouseYPercent = Math.round(yPos / $(this).height() * 40);
     
                    /* Position Each Layer */
                    $('#Parallax').children('img').each(
                            function(){
                                    var diffX = $('#Parallax').width() - $(this).width();
                                    var diffY = $('#Parallax').height() - $(this).height();
           
                                    var myX = diffX * (mouseXPercent / 100);
                                    var myY = diffY * (mouseYPercent / 100);
                                    var cssObj = {
                                            'left': myX + 'px',
                                            'top': myY + 'px'
                                    }
                                    $(this).animate({left: myX, top: myY},{duration: 10, queue: false, easing: 'linear'});
     
                            }
                    );
     
                    }
            );
    });
            
        