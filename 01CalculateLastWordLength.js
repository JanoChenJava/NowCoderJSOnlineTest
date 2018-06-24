//Method 1

let lastWordLength = str=>{
    if(str.length === 0 || str.length >= 5000){
        return false;
    }
    let words = str.split(' ').reverse();
    let lastWord =  words[0];
   print(lastWord.length);
}
lastWordLength(readline());



//Method 2
while(line = readline()){
    var arr = line.split(" ");
    console.log(arr[arr.length-1].length);
}