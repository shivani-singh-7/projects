function prime (lowerNumber,higherNumber)
{
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
prime(2,100);
console.log("first");
let myGreeting = setTimeout(prime, 1,2,10);
console.log("second");
let myGreetings = setTimeout(prime, 4000,2,50);