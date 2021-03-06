'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var DEBOUNCE_INTERVAL = 500;

  window.general = {
    switchDisabledField: function (element) {
      var elems = Array.from(element.querySelectorAll('.' + element.className.replace(' ', '.') + ' > *'));

      elems.forEach(function (item) {
        item.disabled = !item.disabled;
      });
    },

    isEscEvent: function (event, action) {
      if (event.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    specifyId: function (info) {
      info.forEach(function (item, index) {
        item.id = index;
      });
    },

    debounce: function (cb) {
      var lastTimeout = null;

      return function () {
        var parameters = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          cb.apply(null, parameters);
        }, DEBOUNCE_INTERVAL);
      };
    }
  };
})();
