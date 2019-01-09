var frameTop = $('.background-1').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= frameTop) {           // apply position: fixed if you
        $('.background-1').css({                      // scroll to that element or below it
            'position': 'fixed',
            'top': '0vh',
            'left': '0',
            'width': '100vw',
        }),
            $('.conference').css({
             'margin-top': '30vh',
        });
    } else {                                  // apply position: static
            $('.background-1').css({
                'position': 'relative',
           }),
          $('.conference').css({
            'margin-top':'-90vh',
                //works better than previous '-70vh'
            });
    }
});

//end scrolling conference div

var fixmeTop = $('.intro-nav').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.intro-nav').addClass('fixme'),
        $('.tile-link-neutral').addClass('tile-link2'),
        $('.tile-link-neutral').removeClass('tile-link1'),
        $('.intro-tile').addClass('intro-tile2'),
        $('.logo-polon img').css({
                'display': 'none',
        }),
        $('.cookies').css({
                'top': '13vh',
        });
    } else {                                   // apply position: static
        $('.intro-nav').removeClass('fixme'),
        $('.tile-link-neutral').removeClass('tile-link2'),
        $('.tile-link-neutral').addClass('tile-link1'),
        $('.intro-tile').removeClass('intro-tile2'),
        $('.cookies').css({
                'top': '0px',
        });
    }

});

//closing cookies

$("#cookies-x").click(function() {
        $(".cookies").css({
                'display': 'none',
        })
});

//slider
$(".plan").click(function(){
       $(".konf-plan-menu").slideToggle("fast"),
       $(".konf-plan-menu").css({
            'display': 'flex',
       });
        $(".plan-day1").css({
            'display':'none',
        });
        $(".plan-day2").css({
            'display':'none',
        });
});

$(".plan-item-1").click(function(){
        $("html, body").animate({
        scrollTop: $(".plan").offset().top
        }, 1000);
       $(".plan-day1").slideToggle("slow"),
       $(".plan-day1").css({
           'display':'block',       
        });
        $(".conference").css({
            'height': '120vh',
        });
        $(".plan-day2").css({
            'display':'none',
        });
        $(".motto").css({
            'display': 'none',
        });
       });

       $(".plan-item-2").click(function(){
        $("html, body").animate({
        scrollTop: $(".plan").offset().top
        }, 1000);
       $(".plan-day2").slideToggle("slow"),
       $(".plan-day2").css({
           'display':'block',       
        });
        $(".conference").css({
            'height': '120vh',
        });
        $(".plan-day1").css({
            'display':'none',
        });
        $(".motto").css({
            'display': 'none',
        });
       });

       $(".arrow-down").click(function(){
        $("html, body").animate({
        scrollTop: $(".welcome").offset().top
        }, 1000);
       });
        
        $("#about").click(function(){
        $("html, body").animate({
        scrollTop: $(".welcome").offset().top
        }, 1000);
       });

        $("#panelplan").click(function(){
        $("html, body").animate({
        scrollTop: $(".conference").offset().top
        }, 2000);
       });

        $(".panels").click(function(){
        $("html, body").animate({
        scrollTop: $(".panels-details").offset().top
        }, 2000);
       });


       $(".event").click(function(){
       $(this).next(".event-full-description").slideToggle("slow");    
        });

///////////////////

        $("#extra-events").click(function(){
        $("html, body").animate({
        scrollTop: $("#events-scroll").offset().top
        }, 4000);
       });

        $(".extra-events").click(function(){
        $("html, body").animate({
        scrollTop: $("#events-scroll").offset().top
        }, 2000);
       });

