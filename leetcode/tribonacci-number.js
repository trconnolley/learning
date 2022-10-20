// 1137. N-th Tribonacci Number
//LeetCode
//Easy

/**
 * The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 * 
 * @param {number} n
 * @return {number}
 */


let trib = [0,1,1];
const previouslyMaxSafeInteger = 9007199254740991;
//    max length=63              8607945812375585

if (trib.length == 3) {
    for (let i = 3; i < 100; i++) {
        let val = trib[i-1] + trib[i-2] + trib[i-3];
        if (val <= previouslyMaxSafeInteger){
            trib.push(val);
        } else {
            console.log(`Reached Max: length=${trib.length}; value = ${trib[trib.length-1]}`);
            break;
        }
    }
}
//console.log(trib);


//attempt 1
//really slow and bad memory use, but it seems to be running slow right now
//calculating sequence was main issue

//attempt2
//72ms - faster than 77.28% 
//42MB - less than 28.66%

let tribSeq = [0,1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136,5768,10609,19513,35890,66012,121415,223317,410744,
    755476,1389537,2555757,4700770,8646064,15902591,29249425,53798080,98950096,181997601,334745777,615693474,
    1132436852,2082876103,3831006429,7046319384,12960201916,23837527729,43844049029,80641778674,148323355432,
    272809183135,501774317241,922906855808,1697490356184,3122171529233,5742568741225,10562230626642,19426970897100,
    35731770264967,65720971788709,120879712950776,222332455004452,408933139743937,752145307699165,1383410902447554,
    2544489349890656,4680045560037375,8607945812375585];

var tribonacci = function(n) {
    // if (trib.length == 3) {
    //     for (let i = 3; i <= 37; i++) {
    //         trib.push(trib[i-1] + trib[i-2] + trib[i-3]);
    //     };
    // };

    if (n <= 37) {
        return tribSeq[n];
    } else {
        let t_n = 0;
        let t_1 = tribSeq[37];
        let t_2 = tribSeq[36];
        let t_3 = tribSeq[35];
        for (let i = 38; i<=n; i++) {
            t_n = t_1 + t_2 + t_3;
            t_3 = t_2;
            t_2 = t_1;
            t_1 = t_n;
        };
        return t_n;
    };
};

console.log(tribonacci(4)) //4
console.log(tribonacci(25)) //1389537

//console.log(trib);