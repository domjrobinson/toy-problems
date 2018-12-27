/*
Common Ancestor
Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // => null
*/

var Tree = function() {
  this.children = [];
};

/**
 * add an immediate child
 */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(ch2, ch1) {
  var path1 = this.getAncestorPath(ch1);
  var path2 = this.getAncestorPath(ch2);
  if (!path1 || !path2) {
    return null;
  }
  var comm = null;
  for (var i = 0; path1[i] && path2[i]; i++) {
    if (path1[i] === path2[i]) {
      comm = path1[i];
    }
  }
  return comm;
};

Tree.prototype.getAncestorPath = function(target) {
  if (this === target) {
    return [this];
  }
  for (var i of this.children) {
    var path = i.getAncestorPath(target);
    if (path) {
      return [this].concat(path);
    }
  }
  return null;
};
