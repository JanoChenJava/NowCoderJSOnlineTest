let line = readline();
let str = line.split(" ");
let newStr = [];
for(let i = str.length - 1; i > 0; i--){
    newStr.push(str[i]);
}

console.log(newStr.join(" "));