/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-bricks',

  included(app) {
    this._super.included.apply(this, arguments);

    let vendor = this.treePaths.vendor;

    app.import(vendor + '/bricks.js', { prepend: true });
    app.import(vendor + '/shims/bricks-shim.js');
  },

  treeForVendor(vendorTree) {
    var momentTree = new Funnel(path.join(this.project.root, 'node_modules', 'bricks.js', 'dist'), {
      files: ['bricks.js']
    });

    return new MergeTrees([vendorTree, momentTree]);
  },
};
