// 283. Move Zeroes
//LeetCode
//Easy

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/


//atempt 1
//this returns correct answer here, but the output on leetcode is the same as the input

var moveZeroes1 = function(nums) {
    let l1 = nums.length;
    if (l1 <= 1) {
        return nums;
    } 

    nums = nums.filter((n) => n != 0);
    let l2 = nums.length;

    for (let i = 0; i < (l1-l2); i++)
        nums.push(0);
    
    return nums;
};

//attempt 2
//works but really slow apparently
//180ms  faster than only 17.81%
//awsome memory
//45.8MB   less than 99.43%


var moveZeroes2 = function(nums) {
    return nums.sort((a,b) => (a == 0 && b == 0) ? 0 : (a == 0) ? 1 : (b == 0) ? -1 : 0);
};



//this is my version of the recommonded solution
//it returned a wrong answer for [0,0], added break to catch that scenario
//now it's fast
//93ms  faster than 95.2%
//47MB less than 28.1 %

var moveZeroes3 = function(nums) {
    if (nums.length <= 1) {
        return nums;
    } 
    let z;

    //too complicated, I can simplify it
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {//find the first zero
            if (z === undefined) {
                z = i;                
            };

            while (nums[i] == 0) { //advance through all consecutive zeros
                i++;
            };
            if (nums[i] === undefined)
                break;

        } else {
            if (z === undefined || z === i ) {
                continue;
            }
        };
//nums[i] is no longer zero, but will be after we swap values
        nums[z] = nums[i];
        nums[i] = 0;
        z++;
    }

    return nums;
};


// console.log(moveZeroes1([0,1,0,3,12]));  //[1,3,12,0,0]
// console.log(moveZeroes1([0])); //[0]

// console.log(moveZeroes2([0,1,0,3,12]));
// console.log(moveZeroes2([0]));

console.log(moveZeroes3([0,1,0,3,12]));
console.log(moveZeroes3([0]));
console.log(moveZeroes3([0,0]));