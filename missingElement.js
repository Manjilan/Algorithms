//There is an array of non-negative integers.
//A second array is formed by shuffling the elements of the first array and
//deleting a random element. Given these two arrays, find which element is
//missing in the second array.
//November 7, 2018

function missingElement(arr1,arr2){
  for(var i=0; i<arr1.length; i++){
    if(!(arr2.includes(arr1[i]))){
      console.log("Missing items is "+arr1[i]);
    }
  }
}

missingElement([1,2,3,4,5,6], [4,2,3,1,6]);
