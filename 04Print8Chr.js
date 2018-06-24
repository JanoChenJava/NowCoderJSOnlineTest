/*输入

abc
123456789
输出

abc00000
12345678
90000000
*/


var readline = require('readline');
var cin1= readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
var cin2= readline.createInterface({
  input: process.stdin,
  output:process.stdout
});
var long1=cin1.length%8;
if(long1!=0){
    for(let i=0;i<8-long1;i++){
    cin1+='0'
}
}
var long2=cin2.length%8;
if(long2!=0){
    for(let i=0;i<8-long2;i++){
    cin2+='0'
}
}
for(let i=0;i<cin1.length;i+=8){
    console.log(cin1.substring(i,i+8))
}
for(let i=0;i<cin2.length;i+=8){
    console.log(cin2.substring(i,i+8))
}