(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.promotorsDatePicker = {
    attach: function(context, settings) {
      $('.form-date', context).datepicker({
        dateFormat: "yy-mm-dd",
      });
    }
  };
})(jQuery, window, Drupal);
