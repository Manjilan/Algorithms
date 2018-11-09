// Given a binary tree, check whether it’s a binary search tree or not.
//Not Complete
var testTree = {
  id: 8,
  left: {
    id: 5,
    left: {
      id: 3
    },
    right: {
      id: 7
    }
  },
  right: {
    id: 10,
    left: {
      id: 11
    },
    right: {
      id: 12
    }
  }
};
function binaryTree(root){
  if(root.left){
    if(root.left<root.id){
      binaryTree(root.left);
    } else if(root.left>root.id) {
      console.log("Not a binary Tree");
    }
  }
  if(root.right){
    if(root.right>root.id){
      binaryTree(root.right);
    } else if(root.right <root.id) {
      console.log("Not a binary Tree");
    }
  } else {
    console.log("Binary Tree");
  }
  console.log("Binary Tree");
}

binaryTree(testTree);
