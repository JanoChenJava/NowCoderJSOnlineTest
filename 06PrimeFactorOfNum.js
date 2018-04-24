function primeFactor(number){
  let out = '';
  for (let i = 0; i < number; i++) {
    if (number%(i+1)===0) {
      out+=i + ' '; 
    }
    
  }
  return out;
  
}

console.log(primeFactor(10));
// var printRes = function(num) {
//   var res = [];
//   while(num!==1){
//       for(var i=2;i<=num;i++){
//           if(num%i===0){
//               res.push(i+" ");
//               num=num/i;
//               break;
//           }
//       }
//   }
//   console.log(res.join(''))
// }
// console.log(printRes(10))
