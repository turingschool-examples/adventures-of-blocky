describe.skip('World', function () {

  it.skip('should be a function', function () {
    assert.isFunction(World);
  });

  it.skip('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });

  it.skip('should take take the first argument and set it as the "width" property of the instantiated object');

  it.skip('should take take the second argument and set it as the "height" property of the instantiated object');

  it.skip('should have a "blocks" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.blocks);
    assert.deepEqual(world.blocks, []);
  });

});
