$(document).ready(function(){
    $('.first-screen-slider').slick({
        dots:true,
        Infinite:true,
        appendArrows:".first-screen-slider_arrows",
        responsive: [
            {
              breakpoint: 991,
              settings: {
               arrows:false,
              }
            },
          ]
    });
  });