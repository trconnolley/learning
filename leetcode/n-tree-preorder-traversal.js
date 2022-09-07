//589. N-ary Tree Preorder Traversal
//easy

/*
https://leetcode.com/problems/n-ary-tree-preorder-traversal/?envType=study-plan&id=programming-skills-i
*/


class TreeNode {
  //constructor(data, index = null, level = null, levelIndex = null, parent = null, children = []){
  constructor(data, index = null, parent = null, children = []){
    this.data = data
    this.index = index    
    //this.level = level
    //this.levelIndex = levelIndex
    this.parent = parent
    this.children = children
  }
};

function createNodeTree(root) {
  let arr = [];
  let rootNode = null;
  let nullCount = 0;
  let index = 0;
  let nextParentIndex = -1;
  var nextParent=null;

  for (var i = 0; i < root.length; i++) {
    if(root[i] === null) {
      nullCount++;
    } else {
      //null advances parent to next overall index
      if (nullCount > 0) {
        nextParentIndex += nullCount;
        nextParent = arr.find(o => o.index == nextParentIndex);
        nullCount = 0;
      };

      //create node
      let n = new TreeNode(root[i], index);
      if (rootNode === null) {
        rootNode = n;
        nextParent = n;
        //n.level = 0;
        //n.levelIndex = 0;
      } else {
        n.parentNode = nextParent;
        //n.level = nextParent.level + 1;
        //n.levelIndex = nextParent.children.length;
        nextParent.children.push(n);
      };
      arr.push(n);
      index++;
    };
  };
  //console.log(rootNode);
  return rootNode;
};

var preorder = function(root) {
  let rootnode = createNodeTree(root);
  let arr = [];

  arr.push(rootnode.data);

  var getChildren = function(n){
    n.children.forEach(function(c){
      arr.push(c.data);
      getChildren(c);
    })
  };
  getChildren(rootnode);
  return arr;
};

console.log(preorder([1,null,3,2,4,null,5,6]));
// [1,3,5,6,2,4]

console.log(preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]));
// [1,2,3,6,7,11,14,4,8,12,5,9,13,10]



///I think I overthought
//they are actaully supplying nodes
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

//attempt 1
//Error, arr.push(root.val) error if root is null,  added check

//atempt 2 - accepted
//9/5/2022
//183ms   faster than 10.11%
//53.1MB  less than 5.64%    - Dang that's really bad

//now I see what it was easy, I was trying to create the tree, I just had to read it

var preorder = function(root) {
  let arr = [];
  if (root){
    arr.push(root.val);
    var getChildren = function(n){
      n.children.forEach(function(c){
        arr.push(c.val);
        getChildren(c);
      })
    };
    getChildren(root);
  }
  return arr;
};

//attempt 3 - accepted
//88ms   -  faster than 89.94%
//45.7MB -  less than 48.48%

var preorder = function(root) {
  let arr = [];
  if (root){
    arr.push(root.val);
    var getChildren = function(n){
      for (var c of n.children){
        arr.push(c.val);
        if (c.children !== undefined){
          getChildren(c);
        };
      };
    };
    getChildren(root);
  };
  return arr;
};