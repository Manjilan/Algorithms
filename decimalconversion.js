function decimaryconversion(binarynum){
  var result =0;
  var binaryArr=binarynum.split("");
  console.log(binaryArr);
  for(i=0; i<binaryArr.length; i++){
    result = result*2+parseInt(binaryArr[i]);
  }
  return result;
}
console.log(decimaryconversion("10100"));
