# ember-cli-bricks

`ember-cli-bricks` wrapper around [bricks.js](http://callmecavs.com/bricks.js/)
and is a blazing fast masonry layout generator for fixed width elements for Ember.js.

How to use:
```es6
{{#bricks-grid as | grid |}}
  <!-- for using brick-div with some styles, use `item` namespace  -->
  {{#grid.item class="simple-brick"}}
    Hello, simple brick
  {{/grid.item}}

  <!-- for using brick with image, use `image namespace` -->
  {{#grid.item class="simple-image-brick"}}
    <img src="/path/to/image" />
  {{/grid.item}}
{{/bricks-grid}}
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-bricks`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
