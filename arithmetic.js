function sum(start, end){
    var sum = 0;
    for(let i = start;i <=end; i++){
        sum+=i;
    }
    return sum;
}

function multiply(start, end){
    var mul = 1;
    for(let i = start;i <=end; i++){
        mul*=i;
    }
    return mul;
}

function performTask(start, end, func){
    return func(start,end);

}


var sum = performTask(1,10,multiply);
console.log(sum);