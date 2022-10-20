// 1572. Matrix Diagonal Sum
//LeetCode
//Easy

/*
Description contains image:  https://leetcode.com/problems/matrix-diagonal-sum/
*/

//Attempt 1
//st 10:26 to 10:37   ~11 min
//got a wrong answer - stupid mistake going over same diagnal twice
//after fix, total 15 minutes
//105ms         faster than 31.18%
//44.3 MB       less than 16.34%

var diagonalSum1 = function(mat) {
    //let l = mat.length;
    let sum = 0;
    
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
        //console.log(`[${i},${i}] => ${mat[i][i]}`);
    };

    let j = -1;
    for (let i = mat.length-1; i >= 0; i--) {  
        j++;
        if (mat.length%2 != 0) {
            //get midpoint & exclude from 2nd run
            if (i == Math.floor(mat.length/2))
                continue;
        }
        sum += mat[j][i];
        //console.log(`[${i},${j}] => ${mat[j][i]}`);
    }
    return sum;
};


//attempt2
//make it one run, couple minutes work
//118 ms, no faster?    Yes, b/c max length is 100, so it's a really small sample
//43.8 MB   less than 55.62%;

//note:  changing mat.length to variable did not speed anything up

var diagonalSum = function(mat) {
    let l =  mat.length;
    let isOdd = l%2 != 0;
    let sum = 0;
    let j = -1; 
    for (let i = l-1; i >= 0; i--) {  
        sum += mat[i][i];
        
        j++;
        if (isOdd) {
            if (i == Math.floor(l/2))
                continue;
        }
        sum += mat[j][i];
    }
    return sum;
};

//attempt 3  - 

//console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); //25
//console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])); //8
//console.log(diagonalSum([[5]])); //5
console.log(diagonalSum([[7,3,1,9],
                         [3,4,6,9],
                         [6,9,6,6],
                         [9,5,8,5]])); //55
//console.log(diagonalSum());