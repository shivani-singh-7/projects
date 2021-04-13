function* generatePrime(n){
    for(var i=2;i<n;i++){
        if(isPrime(i)){
            yield i;
        }
    }
}
function isPrime(number){
    for(var i=2;i<number;i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
const obj=generatePrime(10);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);