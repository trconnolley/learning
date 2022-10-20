// 509. Fibonacci Number
//Leetcode
//Easy

/**
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Constraints:

0 <= n <= 30
 * 
 * @param {number} n
 * @return {number}
 */
//let Fibonacci = [0,1,2,3,5,8,13,21,34,55,89,]

//attempt 1
//102ms - Faster than 49.97%
//41.7MB - Less than 78.29%

 var fib1 = function(n) {
    switch(n) {
        case 0:
            return 0;
        break;
        case 1:
            return 1;
        break;
        default:
            let fn_1 = 1;
            let fn_2 = 0;
            let fn = 0;
            for (let i = 2; i <= n; i++) {
                fn = fn_1 + fn_2;
                fn_2 = fn_1;
                fn_1 = fn;
            };
            return fn;
    }  
};


//attempt2
//66ms - Faster than 92.99%
//41.6MB - Less than 78.29%

let fibonnaci = [0,1];
var fib = function(n) {
    if (fibonnaci.length == 2) {
        for (let i = 2; i <= 30; i++) {
            fibonnaci.push(fibonnaci[i-1] + fibonnaci[i-2]);
        };
        //console.log(fibonnaci);
        //console.log(fibonnaci[fibonnaci.length-1]);
    };

    switch(true) {
        case (n <= 30):
            return fibonnaci[n];
        break;
        default:
            let fn_1 = 1;
            let fn_2 = 0;
            let fn = 0;
            for (let i = 2; i <= n; i++) {
                fn = fn_1 + fn_2;
                fn_2 = fn_1;
                fn_1 = fn;
            };
            return fn;
    }  
};

console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3

let fibonnaci2 = [0,1];
const previouslyMaxSafeInteger = 9007199254740991;
//     Max Value w/o BigInt      8944394323791464,   lenght: 79

if (fibonnaci2.length == 2) {
    for (let i = 2; i <= 400; i++) {
        let val = fibonnaci2[i-1] + fibonnaci2[i-2];
        if (val <= previouslyMaxSafeInteger) {
            fibonnaci2.push(val);
        } else {
            console.log(`Reached max length: ${i}; value ${fibonnaci2[i-1]}`);
            break;
        };
        
    };
    console.log(fibonnaci2);
    console.log(fibonnaci2[fibonnaci2.length-1]);
};