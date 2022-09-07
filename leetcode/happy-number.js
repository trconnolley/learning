//202. Happy Number
//easy

/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

//attempt
//71 ms        faster than 92.05%
//44.1 MB      less than 43.48%

var isHappy = function(n) {    
    let results = [];
    //let counter = 0;
    
    while (n > 1) {
        let arr = [...n.toString()];
        results.push(n);
        n = arr.reduce((a,b) => a + parseInt(b)**2,0);
        //console.log(arr);
        //console.log(n);
        if (results.includes(n)){
            return false;
        };
        //counter++;
        // if (counter >= 10) {
        //     console.log("THE END OF THE WORLD");
        //     break;
        // };
    }
    return true;
};
console.log(isHappy(19));
console.log(isHappy(2));
//console.log(isHappy());
//console.log(isHappy());