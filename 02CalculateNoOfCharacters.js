function calculateNoChar(str){
    let newStr = str.split(' ');
    let targetStr = newStr[0];
    let single = newStr[1];
    let count = 0;
  for (let index = 0; index < targetStr.length; index++) {
      if (single == targetStr.charAt(index)) {
          count++;
      }    
  }
  return count;
}

console.log(calculateNoChar("ABCEAADF A"))
