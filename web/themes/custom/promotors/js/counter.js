(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.promotorsCounter = {
    attach: function (context, settings) {

      let win = $(window);

      // Count up from zero on scroll.
      win.scroll(function (event) {
        $('.counter', context).each(function() {
          var $this = $(this);
          var countTo = $this.attr('data-count');

          if ($this.visible(true)) {
            $({ countNum: $this.text()}).animate(
              {
                countNum: countTo
              },
              {
                duration: 3000,
                easing:'linear',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          }
        });
      });
    }
  };

})(jQuery, window, Drupal);
