//70. Climbing Stairs
// LeetCode
// Easy

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/


/**
 * @param {number} n
 * @return {number}
 */

/*
        6:          8:                  10:                 5:          7:          9:
total:          
    111111      11111111            1111111111          11111       1111111     111111111
    222         2222                22222               221         2221        22221

1: (n-1)
    1x4 = 5     1x6 = 7             1x8 = 9             1x3=4       1x5 = 6
    21111       2111111             211111111           2111        211111      21111111
    12111       12                  12                  1211        12          12
    11211       112                 112                 1121        112         112
    11121       1112                1112                1112        1112        1112
    11112       11112               11112                           11112       11112
                111112              111112                          111112      111112
                1111112             1111112                                     1111112
                                    11111112                                    11111112
                                    111111112

2:  2x2 = 6     2x4 = 15            2x6                 2x1 = 3     2x3 = 10    2x5 = 21
    2211        221111              22111111            221         22111       2211111
    2121        212111              212                 212                     212
    2112        211211              2112                122                     2112
    1221        211121              21112                                       21112
    1212        211112              211112                                      211112
    1122        122111              2111112                                     2111112
                121211              21111112                                    1221111
                121121                                                          1212
                121112                                                          12112
                112211                                                          121112
                112121                                                          1211112
                112112                                                          1122111
                111221                                                          11212
                111212                                                          112112
                111122                                                          1121112
                                                                                1112211
                                                                                111212
                                                                                1112112
                                                                                1111221
                                                                                1111212
                                                                                1111122

3:              2x3 = 10            3x4                                         3x3
    maxed       11222               2221111             maxed       maxed       222111
                12122               2212                                            
                12212               22112
                12221               221112
                21122               2211112
                21212               2122111
                21221               21212
                22112               212112
                22121               2121112
                22211               1222111
                                    1221211
                                    122112
                                    1221112
                                    12112mmmmmm



*/                                  

//attempt 1

 var climbStairs = function(n) {
    //max number of 2s
    let t = 1; //all 1's is the 1st option
    
    let isOdd = (n%2 == 0) ? false : true;
    let maxTwo = (isOdd) ? (n-1)/2 : n/2;

    //progress from # of 2s up to max
    for (let i = 1; i < maxTwo; i++) {

    };

};


console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
//console.log(climbStairs());