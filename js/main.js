// main dependencies
// smooth scrolling between the section links when clicked // open source not from one said developer I found here https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
});
// bespoke function, if mobile device show placeholder 
$(document).ready(function() {
    if ($(window).width() < 700) { // if smaller then 1024px screen
         $('.mobile').show();
    }
    else { 
    $('.mobile').hide();
    }
    
});

  //  <!-- Scroll active class--> adds active class to whatever section the user is currently over. Found opensource on jsfiddle
        $(document).ready(function(){
        var sections = $('section')
          , nav = $('nav')
          , nav_height = nav.outerHeight();

        $(window).on('scroll', function () {
          var cur_pos = $(this).scrollTop();

          sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              sections.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
        });
    });

//<!-- Section Snapper Initiation--> initiates js/sectionsnap
$(document).ready(function() {
        $("body").sectionsnap({
        // time dilay (ms)
        'delay': 100, 

        // selector
        'selector': ".section", 

        // % of window height from which we start
        'reference': .9, 

        // animation time (snap scrolling)
        'animationTime': 400, 

        // offset top (no snap before scroll reaches this position)
        'offsetTop': 0,

        // offset bottom (no snap after bottom - offsetBottom)
        'offsetBottom': 0 
        });
});


// section 1
// 
    //<!-- PLAY/PAUSE SWITCH --> created by enhancing small snippets online
   
    $(document).ready(function(){ //ready 
        $("#switcher").click(function(){ //onclick #switcher
        imagePath = $("#switcher").attr("src"); // setting imagepath's src variable to #switcher
        if(imagePath == "img/icon/pause-icon.png"){ // if imagepaths src = pause button
            $("#switcher").attr("src", "img/icon/play-icon.png"); // switch to play button
        }else{
            $("#switcher").attr("src", "img/icon/pause-icon.png");  // else switch to pause button
        }
        });
        
        $("#switcher2").click(function(){ // same as above with sound controls
        imagePath = $("#switcher2").attr("src");
        if(imagePath == "img/icon/unmute-icon.png"){
            $("#switcher2").attr("src", "img/icon/mute-icon.png");
        }else{
            $("#switcher2").attr("src", "img/icon/unmute-icon.png");        
        }
        });
    });
        

$(document).ready(function(){

    var quotes = $(".quotes"); // found technique on jsfiddle http://stackoverflow.com/questions/12065273/fade-in-out-text-loop-jquery .quotes variable
    var quoteIndex = -1;  // set quoteindex variable -1
    
    function showNextQuote() { //function name
        ++quoteIndex; // ++ to quote variable
        quotes.eq(quoteIndex % quotes.length) // finds out how many .quotes and repeats in sequence
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote); //repeat
    }
    
    showNextQuote();

    });  

    
     //   <!-- PLAY/PAUSE BUTTON FOR VIDEO BACKGROUND--> create using small snippets from internet.
   
        function vid_play_pause() { // this is a inline called function onclick of the front-end controls
          var myVideo = document.getElementById("bgvid");// get element bgvid and set to variable myVideo
          if (myVideo.paused) {      // if myvideo paused
            myVideo.play(); // play video
          } else { // else pause video
            myVideo.pause();
          }
        }
        
        function muteUnMute() // same as above but editing html5 attribute 
        { var myVideo = document.getElementById("bgvid");
            if( !myVideo.muted)
         myVideo.muted='muted';
        else

        myVideo.muted=false;
        } 

 // onclick toggle bespoke made lightbox. Created within CSS
$(document).ready(function(){

        $('.lightboxToggle').click(function () {
              $('.lightbox').fadeToggle();
        });
    });

    
  //      <!--RSS FEEDS -->
 //   <!--Written by Jon Tarrant, this script changes what RSS feed is shown on click of the three icons. CSS height is also changed to fix a bug where inline styles were being applied dynmically to set the height to 0 when hidden. The .show() had no effect in recreating the height so I did it onclick also. It also adds an custom active class and removes it from every other link when clicked, to show which button is active. passing the active class did not work so custom active classes had to be made.-->

    $(document).ready(function(){

      $('#twitter-feed').hide();
      $('#facebook-feed').hide();
        var element = document.getElementById("bg-link");
        element.classList.add("bg-link-active");

      $('#bg-link').click(function(){ 
          var element = document.getElementById("bg-link");
          element.classList.add("bg-link-active");
          var element = document.getElementById("tw-link");
          element.classList.remove("tw-link-active");
          var element = document.getElementById("fb-link");
          element.classList.remove("fb-link-active");
          $('#blog-feed .rssincl-content').css({'height':'100px'});
          $('#blog-feed').show();
          $('#twitter-feed').hide();
          $('#facebook-feed').hide();	
      });

      $('#tw-link').click(function(){ 
          var element = document.getElementById("bg-link");
          element.classList.remove("bg-link-active");
          var element = document.getElementById("tw-link");
          element.classList.add("tw-link-active");
          var element = document.getElementById("fb-link");
          element.classList.remove("fb-link-active");
          $('#blog-feed').hide();
          $('#twitter-feed .rssincl-content').css({'height':'100px'});
          $('#twitter-feed').show();
          $('#facebook-feed').hide();	
      });

      $('#fb-link').click(function(){ 
          var element = document.getElementById("bg-link");
          element.classList.remove("bg-link-active");
          var element = document.getElementById("tw-link");
          element.classList.remove("tw-link-active");
          var element = document.getElementById("fb-link");
          element.classList.add("fb-link-active");
          $('#blog-feed').hide();
          $('#twitter-feed').hide();
          $('#facebook-feed .rssincl-content').css({'height':'100px'});
          $('#facebook-feed').show();	
      });
    });
  
 
// section 2 options for bigSlide.js to show menu

        $(document).ready(function(){
            $('.slideContainer').hide();
            
            $('.toggle').click(function () {
                if ($(window).width() < 1024) { // if smaller then 1024px screen
                     $('#mapContainer').toggle('slide', { direction: 'right' }, 1000);
                      $('.slideContainer').toggle('slide', { direction: 'right' }, 1000);
                    }
                else { 
                $('.slideContainer').toggle('slide', { direction: 'right' }, 1000);
                }
                 
            });
        });

// section 3 // on click of any of the .circle created with personal techniques
$(document).ready(function(){
    $('.circle').click(function(){
        $('.circle').animate({borderWidth:"2px"},500); // removes border off any element which already has a large border
        $(this).animate({borderWidth:"15px"},500); // adds border to the one that just got clicked
    });


});

$(document).ready(function() {
    
    // personal technique, responsive javascript margin-top
    $('.circles').click(function(){ // on click of circles
        if ($(window).width() < 1400 && $(window).width() > 1024) { // if smaller then 1400px screen
            $('.circles').animate({ marginTop: "100px" }, 1000);  //margintop 150
        }
        else if ($(window).width() < 1024){
          
        }
        else { // else // larger then 1400 margin top 280px;
            $('.circles').animate({ marginTop: "280px" }, 1000);
        }
    });
    
    // on click of #content-1 increase circle size, show hidden content hide all other circle content. Personal technique
        $("#content-1").click(function () {

            $('.collapse-1').slideToggle(700, "jswing", function () { // slidetoggle animation jswing
            });
            $('.collapse-2').fadeOut(100); // fade out all other possible shown hidden boxes
            $('.collapse-3').fadeOut(100);
            $('.collapse-4').fadeOut(100);
             if ($(window).width() > 1024) { // if smaller then 1024px screen
            $('#content-1').animate({ width: "250px", height: "250px" }, {duration: 500, queue: false}); // increase size of particular circle when clicked
            $('#content-2').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});// do not queue with other animations
            $('#content-3').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false}); // stops animation lag
            $('#content-4').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
             }
            else {}

        });
        // see above
        $("#content-2").click(function () {

            $('.collapse-2').slideToggle(700, "jswing", function () {
            });
            
            $('.collapse-1').fadeOut(100);
            $('.collapse-3').fadeOut(100);
            $('.collapse-4').fadeOut(100);
            if ($(window).width() > 1024) { // if smaller then 1400px screen
            $('#content-1').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-2').animate({ width: "250px", height: "250px" }, {duration: 500, queue: false});
            $('#content-3').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-4').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            }
            else {}

        });
    // see above
        $("#content-3").click(function () {

            $('.collapse-3').slideToggle(700, "jswing", function () {
            });
            
            $('.collapse-1').fadeOut(100);
            $('.collapse-2').fadeOut(100);
            $('.collapse-4').fadeOut(100);
            if ($(window).width() > 1024) { // if smaller then 1400px screen
            $('#content-1').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-2').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-3').animate({ width: "250px", height: "250px" }, {duration: 500, queue: false});
            $('#content-4').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            }
                else {}

        });
    // see above
        $("#content-4").click(function () {

            $('.collapse-4').slideToggle(700, "jswing", function () {
            });
            
            $('.collapse-1').fadeOut(100);
            $('.collapse-2').fadeOut(100);
            $('.collapse-3').fadeOut(100);
            if ($(window).width() > 1024) { // if smaller then 1400px screen
            $('#content-1').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-2').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-3').animate({ width: "200px", height: "200px" }, {duration: 500, queue: false});
            $('#content-4').animate({ width: "250px", height: "250px" }, {duration: 500, queue: false});
            }
            else {}
   
        });
    });

// section 4 
// personal technique, on click of each div ID, show add the 'manClick' class which will increase the outer-div width so that the two graphics associated with that div will show without fault.
$(document).ready(function() {
 $('#alcohol').click(function(){ 
     $('.healthCheck1').toggleClass('manClick');
     $('.healthCheck2').removeClass('manClick');
     $('.healthCheck3').removeClass('manClick');
     $('.healthCheck4').removeClass('manClick');
     $('#graphic-3').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-4').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-5').removeClass('clicked animated fadeinLeft fadeInRight'); // add these classes on click to allow them to fade in
     $('#graphic-6').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-7').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-8').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-1').toggleClass('animated fadeInLeft clicked'); // toggle the classes so that if the user was to click on them again they will all colapse
     $('#graphic-2').toggleClass('animated fadeInRight clicked');

       });

 $('#injured').click(function(){ //process is repeated for each ID
     $('.healthCheck2').toggleClass('manClick');
     $('.healthCheck1').removeClass('manClick');
     $('.healthCheck3').removeClass('manClick');
     $('.healthCheck4').removeClass('manClick');
     $('#graphic-1').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-2').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-5').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-6').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-7').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-8').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-3').toggleClass('animated fadeInLeft clicked');
     $('#graphic-4').toggleClass('animated fadeInRight clicked');
       });

   $('#ambulance').click(function(){ 
     $('.healthCheck3').toggleClass('manClick');
     $('.healthCheck1').removeClass('manClick');
     $('.healthCheck2').removeClass('manClick');
     $('.healthCheck4').removeClass('manClick');
     $('#graphic-1').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-2').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-3').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-4').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-7').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-8').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-5').toggleClass('animated fadeInLeft clicked');
     $('#graphic-6').toggleClass('animated fadeInRight clicked');
       });

 $('#mental').click(function(){ 
     $('.healthCheck4').toggleClass('manClick');
     $('.healthCheck1').removeClass('manClick');
     $('.healthCheck2').removeClass('manClick');
     $('.healthCheck3').removeClass('manClick');
     $('#graphic-1').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-2').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-3').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-4').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-5').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-6').removeClass('clicked animated fadeinLeft fadeInRight');
     $('#graphic-7').toggleClass('animated fadeInLeft clicked');
     $('#graphic-8').toggleClass('animated fadeInRight clicked');
       });
});

// Personal techniques, here I use an if statement to pass the active class from the position set navigation to the mininature bullet navigation.

$(document).ready(function() {
     $('#nav11').addClass('active'); // auto add class to section 1 onload
    $(document).mousemove(function() {
        if ($('#nav1').hasClass("active")) { // if nav1 (section 1) has .active 
            $('#nav11').addClass('active'); // add .active to the corresponding .miniNav link

        } else {                            // else remove class active, this is important to keep the active class updated.
            $('#nav11').removeClass('active');
        }
    });
        $(document).mousemove(function() {
        if ($('#nav2').hasClass("active")) {
            $('#nav22').addClass('active');

        } else {
            $('#nav22').removeClass('active');
        }
    });
        $(document).mousemove(function() {
        if ($('#nav3').hasClass("active")) {
            $('#nav33').addClass('active');

        } else {
            $('#nav33').removeClass('active');
        }
    });
        $(document).mousemove(function() {
        if ($('#nav4').hasClass("active")) {
            $('#nav44').addClass('active');

        } else {
            $('#nav44').removeClass('active');
        }
    });
        $(document).mousemove(function() {
        if ($('#nav5').hasClass("active")) {
            $('#nav55').addClass('active');

        } else {
            $('#nav55').removeClass('active');
        }
    });
});