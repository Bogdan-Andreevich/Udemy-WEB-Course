$( ".burger" ).on( "click", function() {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
});