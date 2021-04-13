const isPrimeSync=function(number){
    if(number<2)
    return false;
    if(number==2)
    return true;
    for(let i=2;i<number;i++)
    if(number%i===0)
    return false;
    else
    return true;
}
const findPrimes=(min,max,callback)=>{
    let low=min;
    let hi=Math.min(low+10,max);
    let count=0;
    let id=setInterval(()=>{
        for(i=low;i<hi;i++){
            if(isPrimeSync(i)){
            count++;
            callback({action:`PRIME`,min,max,index:count,value:i});
            }
        }
        low=hi;
        hi=Math.min(low+10,max);
        if(low>=max){
            clearInterval(id);
            callback({action:`DONE`.min,max,primes:count});
        }
    },1000);
}
findPrimes(2,100,console.log);
findPrimes(2,200,console.log);