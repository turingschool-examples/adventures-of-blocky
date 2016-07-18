# Introduction to Unit Testing in JavaScript

## Installation

First, clone this repository. Once, you have it on your computer, navigate to the directory in the terminal and run the following command:

```
npm install
```

## Starting Up

Run the following from your terminal:

```
npm start
```

Once the server is up and running, visit `http://localhost:4000/` in your browser.

## Getting Started

We'll be modifying four files as we complete these exercises:

- `block.js`
- `world.js`
- `block-test.js`
- `world-test.js`

## Phase One: Get the Tests Passing

There are a few dozen tests defined between `block-test.js` and `world-test.js`. Some of them are complete with assertions and a working implementation. Some of them are skipped tests just waiting for an implementation. The rest are empty shells—waiting for you to write some assertions followed by the implementation necessary to get them passing.

Your first job is to get the entire suite passing.

## Phase Two: Blaze Your Own Trail

### Blocky in the World

Blocks should be able to take a fifth argument: a `world` instance. The implementation might look something like this:

```js
function Block(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

// Block prototype methods omitted.
// World code omitted.

var world = new World(100, 100);
var block = new Block(0, 0, 25, 25, world);

// These would be two separate tests.
assert.equal(block.world, world);
```

Conversely, a world should be able to add blocks to itself. This might look something like this:

```js
World.prototype.addBlock = function (x, y, width, height) {
  // `this` is the current world instance that we're calling this method on.
  // We'll pass it as the fifth argument (see above).
  var block = new Block(x, y, width, height, this);
}
```
