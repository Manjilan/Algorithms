//Given a sorted array, remove any duplicates from the array.
//Optimize for space (do it in-place).
// Date: Nov 6, 2018

function removeDuplicate(arr){
  let uniqueArr=[];
  arr.forEach(function(item){
    if(!(uniqueArr.includes(item))){
      uniqueArr.push(item);
  }
  });
  return uniqueArr;
}

console.log(removeDuplicate([2,2,2,2,2,2]));
