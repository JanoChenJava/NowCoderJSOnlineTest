var str;
while(line=readline()){
    str = line.split("");
    var arr = [str[0]];
    for(var i=0;i<str.length;i++){
        if(arr.indexOf(str[i])==-1){
            arr.push(str[i]);
        }
    }
    console.log(arr.length);
}
