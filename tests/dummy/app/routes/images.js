import Ember from 'ember';

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

export default Ember.Route.extend({
  setupController(controller) {
    const arr = [];

    for (var i = 0; i < 100; i++) {
      arr.push(
        `http://lorempixel.com/${randomInteger(100, 700)}/${randomInteger(100, 700)}`
      );
    }

    controller.set('items', arr);
  }
});
