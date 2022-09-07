//1491. Average Salary Excluding the Minimum and Maximum Salary
//from: LeetCode.com
//difficulty: Easy

/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

 

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
Example 2:

Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
 

Constraints:

3 <= salary.length <= 100
1000 <= salary[i] <= 10^6
All the integers of salary are unique.
*/

//My solution
//start 1:52p
//2:08p  : 16 min
//to be fair, I looked up answers for min and max, and sum of an array
//runtime: 90ms       beats 43.05%  
//memory:  41.7 mb    beats 87.05%

/*
var average = function(salary) {
    let min = Math.min.apply(null,salary);
    let max = Math.max.apply(null,salary);
    let sum = salary.reduce((a,b) => a + b,0);

    return (sum - (max + min)) / (salary.length - 2);
};


//faster
var average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = salary.reduce((a,b) => a + b,0);

    return (sum - (max + min)) / (salary.length - 2);
};


//faster
//runtime: 82ms   beats 59.16%
//memory:  42MB  beats 40.04%

var average = function(salary) {
    return (salary.reduce((a,b) => a + b,0) - (Math.max(...salary) + Math.min(...salary))) / (salary.length - 2);
};

*/

/* current attempt*/

var arr = [];
var i = 1;
while (i <= 10**2) { 
    arr.push(i);
    i++;
};

//to sort
arr.sort((a,b) => a - b);

// //find min
// var min = Math.min.apply(null,arr);
// var min = Math.min(...arr);
// //find max
// var max = Math.max.apply(null,arr);
// var max = Math.max(...arr);

// //sum
// var sum = arr.reduce((a,b) => a + b,0);

// //find average
// var avg = arr.reduce((a,b) => a + b,0)/arr.length;

//this version is slower than a run before
var average = function(salary) {
    salary.sort((a,b) => a - b).pop();
    salary.shift();
   
    return salary.reduce((a,b) => a + b,0)/salary.length;

};


console.log(average(arr));
console.log(arr);

/*
Bad, this is slower

var average = function(salary) {
    let min = 10**6;
    let max = 0;
    let sum = salary.reduce(function(a,b){
        if (b > max) {
            max = b;
        };
        if(b < min) {
            min = b;
        };
        return a + b;
    },0);

    console.log(`min:${min}; max:${max}; sum:${sum}; length:${salary.length}`);
    return (sum - (max + min)) / (salary.length - 2);
};

*/