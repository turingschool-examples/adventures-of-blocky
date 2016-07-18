describe('Block', function () {

  it('should be a function', function () {
    assert.isFunction(Block);
  });

  it('should instatiate our good friend, Blocky', function () {
    var blocky = new Block();
    assert.isObject(blocky);
  });

  it('should take take the first argument and set it as the "x" property of the instantiated object', function () {
    var blocky = new Block(15);
    assert.equal(blocky.x, 15);
  });

  it.skip('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var blocky = new Block(15, 30);
    assert.equal(blocky.y, 30);
  });

  it.skip('should take take the third argument and set it as the "width" property of the instantiated object');

  it.skip('should take take the fourth argument and set it as the "height" property of the instantiated object');

  describe('blocky', function () {

    it('should have a method called "moveRight()', function () {
      var blocky = new Block(15, 30);
      assert.isFunction(blocky.moveRight);
    });

    it('"moveRight()" should increment the "x" propety by one', function () {
      var blocky = new Block(15, 30);
      blocky.moveRight();
      assert.equal(blocky.x, 16);
    });

    it.skip('should have a method called "moveLeft()');

    it.skip('"moveLeft()" should increment the "x" propety by one');

    it.skip('should have a method called "moveDown()');

    it.skip('"moveDown()" should increment the "x" propety by one');

    it.skip('should have a method called "moveUp()');

    it.skip('"moveUp()" should increment the "x" propety by one');

    it.skip('should have a method called "getFatter()"');

    it.skip('"getFatter()" should increment its width by 1');

    it.skip('should have a method called "getSkinnier()"');

    it.skip('"getSkinnier()" should decrement its width by 1');

    it.skip('should have a method called "getTaller()"');

    it.skip('"getTaller()" should increment its height by 1');

    it.skip('should have a method called "getShorter()"');

    it.skip('"getShorter()" should decrement its height by 1');

    it.skip('should have a method called "grow()"');

    it.skip('"grow()" should increment its width and height by 1');

    it.skip('should have a method called "shrink()"');

    it.skip('"shrink()" should decrement its width and height by 1');

  });

});
