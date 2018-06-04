/*明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作。
 
 
Input Param 
n               输入随机数的个数     
inputArray      n个随机整数组成的数组 

Return Value
OutputArray    输出处理后的随机整数
*/

var readline = require('readline');
var r1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
var line = -1;
var len = 0;
var arr = [];
var obj = {};
 
r1.on('line',function(input){
    input = parseInt(input);
    if(line == -1){
        line = 1;
        len = input;
        arr = [];
        obj = {};
    }else{
        if(!obj[input]){
            obj[input] = 1;
            arr.push(input);
        }
        if(len === 1){
            console.log(arr.sort(function(a,b){return a-b;}).join("\n"));
            line = -1
        }
        len--;
    }
})