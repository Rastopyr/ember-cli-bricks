import Ember from 'ember';

const { Route, A } = Ember;

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

export default Route.extend({
  actions: {
    remove(i) {
      this.controller.get('items').removeObject(i);
    }
  },

  setupController(controller) {
    const arr = A();

    for (var i = 0; i < 10; i++) {
      arr.push(
        `http://lorempixel.com/${randomInteger(100, 700)}/${randomInteger(100, 700)}`
      );
    }

    controller.set('items', arr);
  }
});
