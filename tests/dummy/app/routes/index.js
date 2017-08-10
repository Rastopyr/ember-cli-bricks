import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    const arr = [];

    for (var i = 0; i < 100; i++) {
      arr.push(i);
    }

    controller.set('items', arr);

    controller.set('columns', 2);
    controller.set('gutter', 10);
  }
});
