"use strict";!function(o,u){Drupal.behaviors.promotorsCounter={attach:function(n,t){o(u).scroll(function(t){o(".counter",n).each(function(){var t=o(this),n=t.attr("data-count");t.visible(!0)&&o({countNum:t.text()}).animate({countNum:n},{duration:3e3,easing:"linear",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})})})}}}(jQuery,window);
//# sourceMappingURL=counter.js.map
