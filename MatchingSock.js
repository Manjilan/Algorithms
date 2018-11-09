//John’s clothing store has a pile of loose socks where each sock i
//has a value denoting its color socks[i]. He wants to sell as many socks
//as possible, but his customers will only buy them in matching pairs.
//Two socks are a single matching pairs if their value are equal: socks[i] === socks[j].
//Given an array socks which will hold all the socks value, how many pairs of
//socks can John sell?
//November8, 2018

function matchingSocks(socks){
  var match=0;
  for(var i=0;i<socks.length; i++){
    for(var j=i+1;j<socks.length;j++){
      if(socks[i]===socks[j]){
        match+=1;
        socks.splice(j,1);
        break;
      }
    }
  }
  console.log("John can sell "+ match+ " pairs of socks");
}

matchingSocks(["blue", "red", "white", "blue", "white", "white", "white", "white"]);
