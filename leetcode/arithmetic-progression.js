//1502. Can Make Arithmetic Progression From Sequence
//easy

/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

 

Example 1:

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
Example 2:

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
 

Constraints:

2 <= arr.length <= 1000
-106 <= arr[i] <= 106
*/

//attempt - took 6 minutes
//114 ms        faster than 20.15%   >> adding if arr.l=2 speeds up to 103ms > faster than 39.34%
//42.4 MB       less than 40.5%      >>  42MB, less than 91.09%

var canMakeArithmeticProgression = function(arr) {
    if (arr.length==2)
        return true;

    arr.sort((a,b) => a-b);
    let d=arr[1]-arr[0];
    for (var i=1; i<arr.length-1;i++) {
        if (arr[i+1]-arr[i] != d) {
            return false;
        };
    };
    return true;
};


//I want better than 50%
