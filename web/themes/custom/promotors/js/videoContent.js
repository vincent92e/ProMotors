(function ($, window, Drupal) {
  'use strict';

  Drupal.behaviors.videoContent = {
    attach: function(context, settings) {
      var v = $('.video-player', context);

      function createvideoId() {
        let i;

        for (i = 0; i < v.length; i++) {
          v[i].setAttribute('id', 'video-play-'+i)
        }
      }

      function createVideoThumbnail() {
        let div;
        let n;

        for (n = 0; n < v.length; n++) {
          div = document.createElement('div');
          div.setAttribute('data-id', v[n].dataset.id);
          div.setAttribute('data-vtype', v[n].dataset.vtype);
          div.setAttribute('class', 'thumbnail-wrapper');
          div.innerHTML = labnolThumb(v[n].dataset.id, n);
          div.onclick = labnolIframe;
          v[n].appendChild(div);
        }
      }

      function labnolThumb(id, counter) {
        let url;
        let thumb;
        let play;

        url = $('.video-content__thumbnail-url', context).text();
        thumb = '<img src="'+url+'">';
        play = '<button class="play"></button>';

        return thumb + play;
      }

      function labnolIframe() {
        let div = document.createElement('div');
        let iframe = document.createElement('iframe');
        let embed = "https://www.youtube.com/embed/ID?autoplay=1&rel=0";

        div.setAttribute('class', 'embed-wrapper');
        div.setAttribute('style', 'padding: 56.25% 0 0 0; position: relative;');

        iframe.setAttribute('src', embed.replace('ID', this.dataset.id));
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '1');
        iframe.setAttribute('style', 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;');

        div.appendChild(iframe);
        this.parentNode.replaceChild(div, this);
      }

      createvideoId();
      createVideoThumbnail();
    }
  };
})(jQuery, window, Drupal)
