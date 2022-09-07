//976. Largest Perimeter Triangle
//leetcode
//diff: easy

/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Example 2:

Input: nums = [1,2,1]
Output: 0
 

Constraints:

3 <= nums.length <= 104
1 <= nums[i] <= 106
*/


//attempt 1
//passed
//9/5/2022


var largestPerimeter = function(nums) {
    //var perimeter=0;
    nums.sort((a,b) => b-a);
    for (var a =0;a<nums.length-2;a++){
        if (nums[a] < nums[a+1] + nums[a+2]) {
            return nums[a] + nums[a+1] + nums[a+2];
        }
    }
    return 0;
};


    //this code, w/ additional outside loop, exceeded time limit
        // for (var b=a+1;b<nums.length-1;b++){
        //     for (var c=b+1;c<nums.length;c++){
        //         //triangle area: heron's formula
        //         // semi-perimter    s=(a+b+c)/2
        //         // A = sq rt (s*(s-a)*(s-b)*(s-c))
        //         let p = nums[a]+nums[b]+nums[c];
        //         let s = p/2;
        //         let A = Math.sqrt(s*(s-nums[a])*(s-nums[b])*(s-nums[c]));
        //         if (!isNaN(A) && A !== 0) {
        //             if (p > perimeter) {
        //                 perimeter = p;
        //             }
        //         }
        //         console.log(`a,b,c: ${nums[a]},${nums[b]},${nums[c]}; s=${s}; A=${A}; p=${p}; perimeter=${perimeter}`);
        //     }
        // }
    
    //return perimeter;


console.log(largestPerimeter([2,1,2]));//5
console.log(largestPerimeter([1,2,1]));//0
console.log(largestPerimeter([3,6,2,3]))//8

/*
initial though, keep largest numbers in array, but no
largest night not allow for a triangle   [1,2,3,4,5,6,100,100000]


var arr = [];
    if (nums.length > 3) {
        nums.sort((a,b) => a-b);
        arr.push(nums.pop());
        arr.push(nums.pop());
        arr.push(nums.pop());
    } else {
        arr = nums;
    };

*/