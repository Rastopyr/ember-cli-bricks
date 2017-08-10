import Ember from 'ember';
import layout from '../../templates/components/bricks-grid/item';

const { Component, on, run } = Ember;

export default Component.extend({
  layout,

  sendRepack: on('didInsertElement', function() {
    this.sendAction('repack');
  }),

  sendRepackOnDestroy: on('willDestroyElement', function() {
    run.next(() => run.schedule('afterRender', () => this.sendAction('repack')));
  }),
});
