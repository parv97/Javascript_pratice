var curr = 1;
var last = 0;
var n = 100;
console.log('0');
while(curr < n){
    console.log(curr);
    let temp = last+curr; 
    last = curr;
    curr = temp;
}