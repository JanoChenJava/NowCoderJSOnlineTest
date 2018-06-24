/* not for all the cases
写出一个程序，接受一个有字母和数字以及空格组成的字符串，和一个字符，然后输出输入字符串中含有该字符的个数。不区分大小写。
输入
ABCDEF A

输出
1
function calculateNoChar(str){
    let newStr = str.split(' ');
    let targetStr = newStr[0];
    let single = newStr[newStr.length -1];
    let count = 0;
  for (let index = 0; index < targetStr.length; index++) {
      if (single == targetStr.charAt(index)) {
          count++;
      }    
  }
  return count;
}

console.log(calculateNoChar("ABCEAADF A"))

*/
var strs=readline();
var a=readline();
var b=a.toUpperCase();
var c=a.toLowerCase();
var strings=strs.split('');
let n=0;
for(const temp of strings){
    if(temp===b||temp===c){
        n++;
    }
}
print(n);
