$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        nextArrow: '<button class="slider__next-arrow"></button>',
        prevArrow: '<button class="slider__prev-arrow"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              }
            }
          ]
    });


  
    $('.catalog__tabs').on('click', 'div:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('.catalog').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');            
    });

    function toggleClass(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item').eq(i).toggleClass('catalog-item_active');
            });
        })
    }
    toggleClass('.catalog-item__more');
    toggleClass('.catalog-item__back');


  });