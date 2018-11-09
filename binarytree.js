var testTree = {
  id: "A",
  left: {
    id: "B",
    left: {
      id: "C"
    },
    right: {
      id: "D"
    }
  },
  right: {
    id: "E",
    left: {
      id: "F"
    },
    right: {
      id: "G"
    }
  }
};

function printTree(root){
  console.log(root.id);
  if(root.left){
      printTree(root.left)
    }
  if(root.right){
      printTree(root.right)
  }
}
printTree(testTree);
