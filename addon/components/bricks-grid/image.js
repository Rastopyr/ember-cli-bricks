import Ember from 'ember';
import layout from '../../templates/components/bricks-grid/item';

const { Component, on, run } = Ember;

export default Component.extend({
  layout,

  sendRepackOnInit: on('didInsertElement', function() {
    const img = this.$('img');

    img.on('load', () => {
      if (!this.get('isDestroyed')) {
        this.sendAction('repack');
      }
    });

    this.sendAction('repack');
  }),

  sendRepackOnDestroy: on('willDestroyElement', function() {
    run.next(() => this.sendAction('repack'))
  }),
});
