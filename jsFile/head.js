$(document).ready(function(){
    $('.dot3').click(function(){
        $('.manu').slideToggle(1000);
    });
    
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay:true,
        autoplayTimeout:3000,
        loop:true
    });
});