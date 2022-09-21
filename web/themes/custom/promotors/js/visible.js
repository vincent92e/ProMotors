(function ($, window, Drupal) {
  Drupal.behaviors.promotorsVisible = {
    attach(context, settings) {
      /*
        Function to check if element is visible in the users window.
       */
      $.fn.visible = function (partial) {
        const $element = $(this);
        const $win = $(window);
        const viewTop = $win.scrollTop();
        const viewBottom = viewTop + $win.height();
        const _top = $element.offset().top;
        const _bottom = _top + $element.height();
        const compareTop = partial === true ? _bottom : _top;
        const compareBottom = partial === true ? _top : _bottom;

        return compareBottom <= viewBottom && compareTop >= viewTop;
      };
    },
  };
})(jQuery, window, Drupal);
