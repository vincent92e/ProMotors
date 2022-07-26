(function ($, window, Drupal) {
  "use strict";

  Drupal.behaviors.visible = {
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
    }
  };
})(jQuery, window, Drupal);
