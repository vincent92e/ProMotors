"use strict";!function(u,o){Drupal.behaviors.counter={attach:function(n,t){u(o).scroll(function(t){u(".counter",n).each(function(){var t=u(this),n=t.attr("data-count");t.visible(!0)&&u({countNum:t.text()}).animate({countNum:n},{duration:3e3,easing:"linear",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})})})}}}(jQuery,window);
//# sourceMappingURL=counter.js.map