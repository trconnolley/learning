//191. Number of 1 bits
//from: leetcode.com
//difficulty: easy

/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 

Constraints:

The input must be a binary string of length 32.
*/


//this is throwing an error in the testing app, but it works here???
var hammingWeight = function(n) {
    let re = /1/g;
    return n.match(re).length;

    //    return n.replaceAll('0','').length;
};

//solution submitted
//9/5/2022
//125ms > only faster than 15.8% of submissions
//mem also bad

const regex = /1/g;
var hammingWeight = function(n) {
    let b = n.toString(2);  //if handling negatives, use  (n >>> 0).toString(2), unsigned right shift bitwise operator
    let arr = b.match(regex);
    return (arr === null) ? 0 : arr.length;
};


//attempt 2
//even slower
//154 ms
var hammingWeight = function(n) {
    return n.toString(2).replaceAll('0','').length
};

//returns an error at ...n
//let arr = [...n];
//arr.filter(a => a = 0);
//return arr.length;
console.log(hammingWeight('00000000000000000000000000001011'));