(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Bricks'],
      __esModule: true,
    };
  }

  define('bricks', [], vendorModule);
})();
