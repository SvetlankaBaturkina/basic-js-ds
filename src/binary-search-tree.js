const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.startNode = null;
};

root() {
  return this.startNode;
};

add(data) {

  this.startNode = newNode(this.startNode, data)

  function newNode(curNode, data) {
    if (!curNode) return new Node(data);
    if (curNode.data === data) return curNode;
    if (curNode.data < data) {
        curNode.right = newNode(curNode.right, data);
    } else {
        curNode.left  = newNode(curNode.left, data);
    }
    return curNode;
  };
};

has(data) {
  return searchNode(this.startNode, data);
  function searchNode(curNode, data){
      if (!curNode) return false;
      if (curNode.data === data) return true;
      if (curNode.data < data) {
        return searchNode(curNode.right, data);
      } else {
        return searchNode(curNode.left, data);
      }; 
  };
};

find(data) {
  return findNode(this.startNode, data);
  function findNode(curNode, data){
      console.log(curNode, data);
      if (!curNode) return null;
      if (curNode.data === data) return curNode;
      if (curNode.data < data) {
        return findNode(curNode.right, data);
      } else {
        return findNode(curNode.left, data);
      };  
  };
};

remove(data) {
  this.startNode = removeNode(this.startNode, data);
  function removeNode(curNode, data) {
      if (!curNode) return null;
      if (curNode.data < data) {
          curNode.right = removeNode(curNode.right, data);
          return curNode;
      } else if (curNode.data > data) {
        curNode.left = removeNode(curNode.left, data);
        return curNode;
      } else {
          if (!curNode.left && !curNode.right) return null;
          if (!curNode.left) {
              curNode = curNode.right;
              return curNode;
          };    
          if (!curNode.right) {
              curNode = curNode.left;
              return curNode;
          };
          
          let maxCount = curNode.left;
            while (maxCount.right) {
            maxCount = maxCount.right;
          }  
            curNode.data = maxCount.data;
            curNode.left = removeNode(curNode.left, curNode.data);
            return curNode;
      };
  };
};

      min() {
        if (!this.startNode) return null;
          let curNode = this.startNode;
          while (curNode.left) {
          curNode = curNode.left;
          }
          return curNode.data
      };

      max() {
        if (!this.startNode) return null;
          let curNode = this.startNode;
          while (curNode.right) {
          curNode = curNode.right;
          };
          return curNode.data;
      };
};

module.exports = {
BinarySearchTree
};