(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.datePicker = {
    attach: function(context, settings) {
      $('.form-date', context).datepicker({
        dateFormat: "yy-mm-dd",
      });
    }
  };
})(jQuery, window, Drupal);
