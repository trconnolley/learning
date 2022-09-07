//1281. Subtract the Product and Sum of Digits of an Integer
//leetcode.com
//difficulty: easy

/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
 

Constraints:

1 <= n <= 10^5
*/


//atempt
//9/5/2022
//122ms >> EXTREMELY SLOW  > beats 5.47% of submittions
//42 MB  >> beats 76.65% of submissions on memmory usage

var subtractProductAndSum1 = function(n) {
    let arr = [...(n.toString())].map((a) => parseInt(a));
    console.log(arr);
    console.log(arr.reduce((a,b) => a*b));
    console.log(arr.reduce((a,b) => a+b))
    return arr.reduce((a,b) => a*b) - arr.reduce((a,b) => a+b);
};


//attempt 2
//109 ms   , only beats 14.1 %
//42.5 MB
var subtractProductAndSum = function(n) {
    let sum = 0;
    let prod = 1;
    let arr = [...(n.toString())].forEach(function(s){
        let num = parseInt(s);
        sum += num;
        prod = prod * num;
    });
    return prod - sum;
};


//attempt 3
//71ms     beats 80.29%
//42.1 MB   beats 66.76%
var subtractProductAndSum = function(n) {
    let sum = 0;
    let prod = 1;
    let str = n.toString();
    for (var i = 0; i<str.length; i++){
        let num = parseInt(str[i]);
        sum += num;
        prod = prod * num;
    };
    return prod - sum;
};

subtractProductAndSum(234);
