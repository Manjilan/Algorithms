function binaryconversion(num){
  var result=[];
  while (num > 0){
    result.push(num%2);
    num = Math.floor(num/2);
  }
  result.reverse();
  return result.join("");
}
console.log(binaryconversion(20));
