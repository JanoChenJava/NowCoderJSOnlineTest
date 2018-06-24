 while(line = readline()){
     let arr1 = line.split("");
     arr1 = arr1.reverse();
     let arr2 = [arr1[0]];
     for (let index = 0; index < arr1.length; index++) {
        if(arr2.indexOf(arr1[i]) == -1){
            arr2.push(arr1[i]);
        }     
 }
 console.log(arr2.join(""));
}

while(line = readline()){
    let arr = line.split("");
    let arr2 = [arr[0]];
    for (let index = 0; index < arr.length; index++) {
        if (arr2.indexOf(arr[index]) = -1) {
            arr2.push(arr[index]);
        }
        
    }
    console.log(arr2.length);
}
