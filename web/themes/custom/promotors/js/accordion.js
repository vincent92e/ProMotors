(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.promotorsAccordion = {
    attach: function (context, settings) {
      if ($('.accordion-item__header', context).length > 0) {
        let active = "active";

        $('.accordion-item__header', context).click(function () {
          $(this).toggleClass(active);
          $(this).next("div").slideToggle(200);
        });
      }
    }
  };
})(jQuery, window, Drupal);
