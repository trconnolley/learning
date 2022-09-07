//Count Odd Numbers in an Interval Range
//from: leetcode.com
//Difficulty: easy

/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9
*/

//My Accepted Submission
//Runtime  87ms   beats  75.9%
//Memory   41.7 MB   beats 77.31%

var countOdds = function(low, high) {

    //three possible situation

    //low=even or 0    high = even
    //                 high = odd  include

    //low = odd        high = even
    //                 high = odd  include

    let l_even = low % 2 == 0;
    let h_even = high % 2 == 0;

    if (l_even && h_even) {
        //1/2 of diff, diff is always even
        return (high-low)/2
    } else if ((l_even && !h_even) || (!l_even && h_even)) {
         //1/2 of diff, ceil
        //add 1 to diff, then 1/2
        return (high-low+1)/2
    } else {//odd and odd
        // 1/2 of diff + 1
        return ((high-low)/2) + 1
    }



};


console.log(5%2)
//actaully counting would take a lot of effort
