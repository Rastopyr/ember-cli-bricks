import Ember from 'ember';
import Bricks from 'bricks';
import layout from '../templates/components/bricks-grid';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  packed: 'packed',

  position: true,

  fullReload: false,

  resize: true,

  sizes: computed(function() {
    return [
      { columns: 2, gutter: 10 }
    ];
  }),

  brickInstance: computed(function() {
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
      sizes,
    });

    instance.on('pack', () => this.sendAction('pack'));
    instance.on('update', () => this.sendAction('update'));
    instance.on('resize', (size) => this.sendAction('resize', size));
    instance.resize(resize);

    return instance;
  }),

  repack() {
    const {
      fullReload, brickInstance
    } = this.getProperties(
      'brickInstance',
      'fullReload'
    );

    if (fullReload) {
      brickInstance.pack();
    } else {
      brickInstance.update();
    }
  },
});
