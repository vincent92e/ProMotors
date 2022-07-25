(function ($, window, Drupal) {
  "use strict";

  Drupal.behaviors.scrollAnimation = {
    attach: function (context, settings) {

      /*
        Function to check if element is visible in the users window.
       */
      $.fn.visible = function (partial) {
        let $element            = $(this);
        let $win            = $(window);
        let viewTop       = $win.scrollTop();
        let viewBottom    = viewTop + $win.height();
        let _top          = $element.offset().top;
        let _bottom       = _top + $element.height();
        let compareTop    = partial === true ? _bottom : _top;
        let compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
      };

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
