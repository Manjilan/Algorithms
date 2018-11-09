function binaryconversion(num){
  let result ="";
  var largest_exp;
  for(var i=0; 2**i<=num; i++){
    largest_exp=i;
  }
  for (var i=largest_exp; i>=0; i--){
    if(2**i <=num){
      num=num-2**i;
      result +=1;
    } else {
      result +=0;
    }
  }
  return result;
}

console.log(binaryconversion(20));
