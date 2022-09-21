(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.promotorsReviewsCarousel = {
    attach: function (context, settings) {
      $('.reviews__review-item .field--name-field-items', context).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }
  };
})(jQuery, window, Drupal);
