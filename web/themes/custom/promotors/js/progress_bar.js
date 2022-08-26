(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.promotorsProgressBar = {
    attach: function (context, settings) {
      $('.progress-bar__bars', context).each(function() {
        $(this).find('.bar').animate({
          width: $(this).attr('data-percent'),
        },3000);
      });
    }
  };
})(jQuery, window, Drupal);
