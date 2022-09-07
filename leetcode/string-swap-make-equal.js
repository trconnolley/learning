//1790. Check if One String Swap Can Make Strings Equal
//easy

/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
 

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.
*/

//attempt
//93ms     faster than 51.36%
//42.4mb    less than 44.26%

var areAlmostEqual = function(s1, s2) {
    if (s1 === s2){
        return true;
    };
    let arr_diff = [];
    let diffs = 0

    for (var i=0; i<s1.length; i++) {
        if (s1.charAt(i) != s2.charAt(i)){
            arr_diff.push([i,s1.charAt(i),s2.charAt(i)]);
            diffs++;
        };
        if (diffs > 2) {
            return false;
        }
    };
    if (diffs == 1) {
        return false;
    }
    if (arr_diff[0][1] == arr_diff[1][2] && arr_diff[0][2] == arr_diff[1][1])
        return true;
    return false;

};

console.log(areAlmostEqual("bank","kanb"));
console.log(areAlmostEqual("aa","ac"));