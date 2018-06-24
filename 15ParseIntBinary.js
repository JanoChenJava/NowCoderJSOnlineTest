let line = readline();
let str = parseInt(line.strim());
str = str.toString(2);
let count = 0;
for (let index = 0; index < str.length; index++) {
    if (str[index] === 1) {
        count++
    }
    
}
console.log(count);