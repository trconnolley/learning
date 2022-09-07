// 1588. Sum of All Odd Length Subarrays
//leetcode
//easy

/*

Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000
 

Follow up:

Could you solve this problem in O(n) time complexity?

*/

//attempt 1
//took 20 for 2 solutions
//all arrays:
//  98ms, faster than 50%
//  48.8MB, less than 5.96%

var sumOddLengthSubarrays1 = function(arr) {
    let sums = [];
    //let SUM = 0;

    for (let i = 1; i <= arr.length; i += 2) {//roll through possible lengths
        for (let j = 0; j < arr.length - (i-1); j++) {//go through every length at each index
            if (i==1){
                sums.push(arr[j]);
                console.log(arr[j]);
                //SUM += arr[j];
            } else {
                let sub = arr.slice(j,j+i);
                let subSum = sub.reduce((a,b) => a + b, 0);
                sums.push(subSum);
                console.log(`Sub: ${sub} => sum ${subSum}`);
                // let sum = 0;
                // for (var k = j; k<j+i; k++){
                //     sum += arr[k];
                // }
                //SUM += sum;
            }
        }
    };
    console.log(`sums arr = ${sums}; => ${sums.reduce((a,b) => a + b, 0)}`);
    return sums.reduce((a,b) => a + b, 0)
    //return SUM;

};

//attempt 2 - direct sum
//105ms SLOWER - fsat than 38.96%
//better memory:  42.2MB - less than 63.36%

var sumOddLengthSubarrays = function(arr) {
    let SUM = 0;
    for (let i = 1; i <= arr.length; i += 2) {//roll through possible lengths
        for (let j = 0; j < arr.length - (i-1); j++) {//go through every length at each index
            if (i==1){
                SUM += arr[j];
            } else {
                let sum = 0;
                for (var k = j; k<j+i; k++){
                    sum += arr[k];
                }
                SUM += sum;
            }
        }
    };
    return SUM;
};



console.log(sumOddLengthSubarrays([1,4,2,5,3])) //58
console.log(sumOddLengthSubarrays([10,11,12])) //66