import Ember from 'ember';
import layout from '../../templates/components/bricks-grid/item';

const { Component, on } = Ember;

export default Component.extend({
  layout,

  sendRepack: on('didInsertElement', function() {
    this.sendAction('repack');
  }),
});
