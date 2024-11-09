let x: number = 1;

let y = 2; // type inferencing

console.log(x);

function greet(firstName: String) {
    console.log(`Hello, ${firstName}!`);
}

greet("Manoj");

function sum(a: number, b: number): number {
    return a + b
}

let ans = sum(1, 4);
console.log(ans);

function isLegal(age: number): boolean {
    if(age > 18) {
        return true;
    } else{
        return false;
    }
}

console.log(isLegal(6));

function delayedCall(fn: () => void) {
    setTimeout(fn, 2000);
}

delayedCall(function () {
    console.log("hello");
    return 2;
})