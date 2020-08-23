(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.stopPropagation();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

/*  $(".sidebar-nav li").click(function(event) {
    event.stopPropagation();
  });*/

  $("html").click(function(e) {
    
      if(e.target.id == "sidebar-wrapper")
        return;
      if($(e.target).closest('#sidebar-wrapper').length)
          return;

      $("#sidebar-wrapper").removeClass('active');
      $('.menu-toggle i').addClass('fa-bars').removeClass('fa-times');
      
  });
  
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });


  // Scroll to top button appear
$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();

    if (scrollDistance >50) {
      $('.scroll-to-top').fadeIn();
      $('#top-navana-navbar').addClass('scrolled-nav');
      $('.logo-overlay img').css({"width":"50%","transition": "all 0.4s", "-webkit-transition": "all .4s","margin-top":"0"});
      $('#advance_search').addClass('advance_search_box');

    } else {
      $('.scroll-to-top').fadeOut();
      $('#top-navana-navbar').removeClass('scrolled-nav');
      $('.logo-overlay img ').css({"width":"120px","transition": "all 0.4s", "-webkit-transition": "all .4s", "margin-top":"0"});
      $('#advance_search').removeClass('advance_search_box');
    }

    // parallaxing
    var $movebg = $(window).scrollTop() * -0.3;
    $('.portion').css('background-positionY', ($movebg) + 'px');

  });

  /* On scroll Count Animation*/
      var a = 0;
      $(window).scroll(function() {
        
        var counterId = document.getElementById("counter");

        if(counterId){
          var oTop = $(counterId).offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
              var $this = $(this),
                countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate({
                  countNum: countTo
                },

                {

                  duration: 1000,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                  }

                });
            });
            a = 1;
        }
      }

      });

      
  //document ready function
 /* jQuery(document).ready(function($){
    var BlackCarousel = $('#carousel');
    BlackCarousel.carousel({
      interval: 2000,
    });
    
    BlackCarousel.carousel('cycle')

  });*/

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
  });


})(jQuery); // End of use strict



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");

    // video background
    var ctrlVideo = document.getElementById("video-bg-elem"); 
    $('#btn-active').click(function(){
      if ($('#btn-active').hasClass("btn-active")){
            ctrlVideo.play();
        $('#btn-active').html("<i class='far fa-pause-circle'></i>");
        $('#btn-active').toggleClass("btn-active");
      } else {
        
            ctrlVideo.pause();
        
        $('#btn-active').html("<i class='far fa-play-circle'></i>");
        $('#btn-active').toggleClass("btn-active");
      }
    });
    // end video background

    //carousel new start
    /*$('.carousel').carousel({
      pause: true
    })

    $('.text-carousel').carousel({
      interval: 5000,
      pause: true
    })

    $('.carousel-control-prev').click(function() {
      $('.text-carousel').carousel('prev');
    });
    $('.carousel-control-next').click(function() {
      $('.text-carousel').carousel('next');
    });*/

});

 // Google map
 function initMap() {
    var locationRio = {lat: 23.796652, lng: 90.415963};
    var map = new google.maps.Map(document.getElementById('cmap'), {
      zoom: 19,
      center: locationRio,
      gestureHandling: 'cooperative'
    });
    var marker = new google.maps.Marker({
      position: locationRio,
      map: map,
      title: 'Navana Real Estate Ltd!'
    });
  }
  