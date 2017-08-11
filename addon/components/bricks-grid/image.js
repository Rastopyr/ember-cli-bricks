
import Ember from 'ember';
import Item from './item';

const { on } = Ember;

export default Item.extend({
  sendRepackOnInit: on('didInsertElement', function() {
    const img = this.$('img');

    img.on('load', () => {
      if (!this.get('isDestroyed')) {
        this.sendAction('repack');
      }
    });

    this.sendAction('repack');
  }),
});
