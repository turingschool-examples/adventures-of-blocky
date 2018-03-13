describe('Block', function () {

  describe('the Block constructor', function () {

    it('should be a function', function () {
      assert.isFunction(Block);
    });

    it('should instantiate our good friend, Blocky', function () {
      var blocky = new Block();
      assert.isObject(blocky);
    });

    it('should take the first argument and set it as the "x" property of the instantiated object', function () {
      var blocky = new Block(15);
      assert.equal(blocky.x, 15);
    });

    it.skip('should take take the second argument and set it as the "y" property of the instantiated object', function () {
      var blocky = new Block(15, 30);
      assert.equal(blocky.y, 30);
    });

    it.skip('should take the third argument and set it as the "width" property of the instantiated object');

    it.skip('should take the fourth argument and set it as the "height" property of the instantiated object');

  });

  describe('the Block object', function () {

    it('should have a method called "moveRight()"', function () {
      var blocky = new Block(15, 30);
      assert.isFunction(blocky.moveRight);
    });

    it('"moveRight()" should increment the "x" property by 1', function () {
      var blocky = new Block(15, 30);
      blocky.moveRight();
      assert.equal(blocky.x, 16);
    });

    it.skip('should have a method called "moveLeft()"');

    it.skip('"moveLeft()" should decrement the "x" property by 1');

    it.skip('should have a method called "moveDown()');

    it.skip('"moveDown()" should decrement the "y" property by 1');

    it.skip('should have a method called "moveUp()');

    it.skip('"moveUp()" should increment the "y" property by 1');

    /*
    Write tests for and implement the following methods:
      - moveUpAndRight();
      - moveUpAndLeft();
      - moveDownAndRight();
      - moveDownAndLeft();
    */

    it.skip('should have a method called "getFatter()"');

    it.skip('"getFatter()" should increment its width by 1');

    it.skip('should have a method called "getSkinnier()"');

    it.skip('"getSkinnier()" should decrement its width by 1');

    it.skip('should have a method called "getTaller()"');

    it.skip('"getTaller()" should increment its height by 1');

    it.skip('should have a method called "getShorter()"');

    it.skip('"getShorter()" should decrement its height by 1');

    it.skip('should have a method called "grow()"');

    it.skip('"grow()" should increment both its width and height by 1');

    it.skip('should have a method called "shrink()"');

    it.skip('"shrink()" should decrement both its width and height by 1');

    /*
    At any given point, blocky should be able to find its top-left,
    top-right, bottom-left, and bottom-right corners. It'll need these
    methods later.

    Call these methods topRight(), topLeft(), bottomRight(), bottomLeft().

    Each should return an object with an "x" and a "y" property. For example:

    var blocky = new Block(5, 5, 10, 10);
    assert.equal(blocky.bottomRight().x, 15);
    assert.equal(blocky.bottomRight().y, 15);.

    (Hint: to find the bottom-right corner, just do x + width and y + height.)
    */

  });

});
