// 43.Multiply Strings
//LeetCode
//Medium

/*

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.

*/

//attemp1
//took less than 1 min
//gets wrong answer on really large nubers

var multiply1 = function(num1, num2) {
    return (num1*num2) + "";
};

//attempt2
//BigInt is for values greater than 2^53 - 1
//108ms  faster tahn 61.46%
//42.5 MB less than 83.55%

var multiply2 = function(num1, num2) {
    return (BigInt(num1)*BigInt(num2)) + "";
};

//attempt3
//BigInt is not time constation, so if don't need it, don't use it
//YES
//91ms  faster than 79.6%
//42.6MB  less than 83.38%

var multiply = function(num1, num2) {
    return (num1*num2 < 9007199254740991) ? num1*num2 + "" : (BigInt(num1)*BigInt(num2)) + "";
};


console.log(multiply("2","3") + '  typeof=' + typeof multiply("2","3"));  //6
console.log(multiply("123","456") + '  typeof=' + typeof multiply("123","456")); //56088
console.log(multiply("123456789","987654321") + '  typeof=' + typeof multiply("123456789","987654321")); //"121932631112635269"
//getting       "121932631112635260"
//should be     "121932631112635269"

console.log(2**53 - 1);


//console.log(multiply() + '  typeof=' + typeof multiply());


//learnign about bigint
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

//9007199254740991   =  2**53 - 1  previously max safe integer
//9007199254740991n                represented as a BigInt
//  9007199254740991n  == BigInt(9007199254740991)

const previouslyMaxSafeInteger = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991")
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff")
// ↪ 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777")
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n

//can use  + * - % **  with bigint or objectwrapped bigints  (Object(1n))


//  division works, but not with deciamals, the decimal is dropped
const expected = 4n / 2n
// ↪ 2n

const truncated = 5n / 2n
// ↪ 2n, not 2.5n


//comparison with numbers
//not strictly equal but loosely
0n === 0
// ↪ false

0n == 0
// ↪ true

//comparison < > is normal
1n < 2
// ↪ true

2n > 1
// ↪ true

2 > 2
// ↪ false

2n > 2
// ↪ false

2n >= 2
// ↪ true

//sorting a mixed array

const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort() // default sorting behavior
// ↪  [ -12n, 0, 0n, 10, 4n, 4, 6 ]

try {
    mixed.sort((a, b) => a - b)
} catch (err) {
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value
}

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
// ↪  [ -12n, 0, 0n, 4n, 4, 6, 10 ]

// only 0n is falsy; everything else is truthy.

//BigInt w/ JSON requires extra work >>> check MDN docs for info

//BigInt operations are not constant time, not great for cryptography, can measure differences

//coersion between numbers and bigint is not recommended, can lead to loss of precision

