// Given an input string, reverse all the words.
// To clarify, input: “Interviews are awesome!”
// output: “awesome! are Interviews”.
// Consider all consecutive non-whitespace characters as individual words.
// If there are multiple spaces between words reduce them to a single white space.
// Also remove all leading and trailing whitespaces.
// So, the output for ”   CS degree”, “CS    degree”, “CS degree   “,
// or ”   CS   degree   ” are all the same: “degree CS”.
// Date: Nov 6, 2018

function reverseString(s){
  var temp=s.split(" ").filter((word)=>{
    if(word !=" "){
      return word;
    }
  });
  var reversed=temp.reverse();
  console.log(reversed.join(" "));
}

reverseString("   CS   degree   ");
