(function ($, window, Drupal) {
  "use strict";

  Drupal.behaviors.scrollAnimation = {
    attach: function (context, settings) {

      let win = $(window);
      let elements = $(".scroll-animation", context);

      // Add animation when html element is visible on the page.
      elements.each(function (i, e) {
        let element = $(e);
        if (element.visible(true)) {
          element.addClass("come-in");
          setTimeout(() => {
            element.addClass("already-visible");
          }, "1000")
        }
      });

      // Add animation on scroll.
      win.scroll(function (event) {
        elements.each(function (i, e) {
          let element = $(e);
          if (element.visible(true)) {
            element.addClass("come-in");
          }
        });
      });
    }
  };
})(jQuery, window, Drupal);
