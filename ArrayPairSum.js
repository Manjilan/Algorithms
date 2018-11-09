//Given an integer array, output all pairs that sum up to a specific value k.
// November 7, 2018
function arrayPairSum(arr, k){
  var pairs=[];
  for(var i=0;i<arr.length; i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] == k){
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(pairs);
}
arrayPairSum([1,2,3,4,5,6], 7);
