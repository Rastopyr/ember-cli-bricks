import Ember from 'ember';
import Bricks from 'bricks';
import layout from '../templates/components/bricks-grid';

const { Component, computed, observer, assign} = Ember;

export default Component.extend({
  layout,

  packed: 'packed',

  position: true,

  fullReload: false,

  resize: true,

  isPacked: false,

  sizes: computed(function() {
    return [
      { columns: 2, gutter: 10 }
    ];
  }),

  container: computed(function() {
    return this.$('.bricks-container')[0];
  }),

  brickInstance: computed(function() {
    return this.instantiate();
  }),

  repackByOptions: observer('sizes.[]', function() {
    this.disable();
    this.instantiate();
  }),

  disable() {
    const brickInstance = this.get('brickInstance');

    if (brickInstance) {
      brickInstance.off('pack');
      brickInstance.off('update');
      brickInstance.off('resize');
    }
  },

  instantiate() {
    const {
      position,
      packed,
      sizes,
      resize
    } = this.getProperties(
      'position',
      'packed',
      'sizes',
      'resize'
    );

    const instance = Bricks({
      container: this.$('.bricks-container')[0],
      position,
      packed,
      sizes: sizes.map((s) => assign({}, s, {
        columns: Number(s.columns),
        gutter: Number(s.gutter),
      })),
    });

    instance.on('pack', () => this.sendAction('pack'));
    instance.on('update', () => this.sendAction('update'));
    instance.on('resize', (size) => this.sendAction('resize', size));
    instance.resize(resize);

    this.set('brickInstance', instance);

    instance.pack();

    return instance;
  },

  repack() {
    const {
      fullReload,
      brickInstance,
      isPacked,
      isDestroyed,
    } = this.getProperties(
      'brickInstance',
      'fullReload',
      'isPacked',
      'isDestroyed'
    );

    if (!brickInstance || isDestroyed) {
      return;
    }

    if (fullReload || !isPacked) {
      brickInstance.pack();

      this.set('isPacked', true);
    } else {
      brickInstance.update();
    }
  },
});
