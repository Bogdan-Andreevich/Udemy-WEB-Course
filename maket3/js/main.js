$(document).ready(function(){
    $('.slider__wrap').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./assets/icon/chevron-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./assets/icon/chevron-right.svg"></button>',
    });

    $('.catalog-item__link').on("click", function() {
        event.preventDefault();
        var item = $(this).closest('.catalog-item');
        var sectionFirst = item.find('.catalog-item__mini-characteristics');
        var sectionSecond = item.find('.catalog-item__characteristics');
        
        if (sectionFirst.hasClass('catalog-item__active')) {
            $(sectionFirst).removeClass('catalog-item__active');
            $(sectionSecond).addClass('catalog-item__active');
            $(this).text('НА3АД');
        } else {
            $(sectionFirst).addClass('catalog-item__active');
            $(sectionSecond).removeClass('catalog-item__active');

            $(this).text('ПОДРОБНЕЕ');
        }
    });

    $('.catelog__tab').on('click', function() {
        var index = $(this).index();
        $('.catelog__tab').removeClass('catelog__tab_active');
        $(this).addClass('catelog__tab_active');

        $('.catalog__items').removeClass('catalog__items_active');
        $('.catalog__items').eq(index).addClass('catalog__items_active');
    });

    $('[data-modal=consult]').on('click', function() {
        $('.overlay, .modal_consult').fadeIn(500);
    });
    $('.modal__close').on('click', function() {
        $('.overlay, .modal_consult').fadeOut(500);
    });
    $('[data-modal=buy]').each(function(i){
        $(this).on('click', function(){
            $('.modal__description').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, .modal_buy').fadeIn(500);
        })
    })

    $('#consult').validate({
        rules: {
            name: "required",
            phone: "required",
            email: "required"
        }
    });

    $('.navigation_arrow').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() < 1600){
            $('.navigation_arrow').fadeOut("slow");
        }else{
            $('.navigation_arrow').fadeIn("slow");
        }
    });
    $('.navigation_arrow').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 
        }, 1000); 
    });
});