
//写出一个程序，接受一个十六进制的数值字符串，输出该数值的十进制字符串。（多组同时输入 ）
var readline=require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//The 'line' event is emitted whenever the input stream receives an end-of-line input (\n, \r, or \r\n). This usually occurs when the user presses the <Enter>, or <Return> keys.

//The listener function is called with a string containing the single line of received input.
r1.on('line',(line)=>{
    var taken=line;
    var res=parseInt(taken,16);
    console.log(res);
});