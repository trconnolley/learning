// 566. Reshape the Matrix
//Leetcode
//Easy

/*
https://leetcode.com/problems/reshape-the-matrix/
description has images

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300

*/


//options
//A: iterate through original & insert into new matrix - really slow & greedy
//B: join/split arrays to reform original
//C: flatten original, instert into new

//attempt 1:  A
//st 11:06
//just do by each, later I will try to add entire arrays to speed it up
//got wrong answer for [[1,2],[3,4]],4,1   , should be [[1],[2],[3],[4]] 

//attempt2  - really bad
//153ms    faster than 12.58%
//46.2MB   less than 19.04%

var matrixReshape1 = function(mat, r, c) {
    if (mat.length * mat[0].length  !== r*c) {//verify it can be reformed, else return mat
        console.log(mat + "  Can't be reformed");
        return mat;
    };

    let new_matrix = [[]];
    let pR = 0;

    for(let R of mat){//row
        for(let C of R){//column
            if (new_matrix[pR].length >= c){
                pR++;
                new_matrix.push([C]);
            } else {
                new_matrix[pR].push(C);
            };
        };
    }
    return new_matrix;
};


//attempt 2
//139ms  faster than 25%
//46.1MB  less than 21.64

var matrixReshape2 = function(mat, r, c) {
    if (mat.length * mat[0].length  !== r*c) {//verify it can be reformed, else return mat
        return mat;
    };
    if (mat.length == r && mat[0].length == c) {//no changes needed
        return mat;
    };

    //let's actaully reform

    if (c > mat[0].length) {//more columns
        let empty = 0;
        for (let i = 0; i+1 < mat.length; i++) {//row
            if (empty +1 == mat.length) {
                break;
            };
            while (mat[i].length < c) {
                mat[i] = [...mat[i], ...mat[empty+1]];
                mat[empty+1] = [];
                empty++;
            };
            if (mat[i].length > c){
                mat[i+1] = mat[i].splice(c);
            };
        };

        //remove empty rows
        for (let i = mat.length-1; i>-1; i--) {
            if (mat[i].length == 0) {
                mat.pop();
            } else {
                break;
            }
        }
        return mat;
    } else {//less columns
        let new_matrix = [[]];
        let pR = 0;
        for(let R of mat){//row
            for(let C of R){//column
                if (new_matrix[pR].length >= c){
                    pR++;
                    new_matrix.push([C]);
                } else {
                    new_matrix[pR].push(C);
                };
            };
        }
        return new_matrix;
    }
};

//attempt 3 - - EVEN SLOWER!!!!!  NOT HAPPY W/ Result


var matrixReshape3 = function(mat, r, c) {
    if (mat.length * mat[0].length  !== r*c || mat.length == r && mat[0].length == c) {//verify it can be reformed, or needs to be
        return mat;
    };

    //define new matrix
    let new_matrix = Array(r).fill().map(() => Array(c));

    let R = 0;
    let C = -1;

    for (let i = 0; i < mat.length; i++) {
        for (let j=0; j < mat[0].length; j++) {
            if (C >= c - 1){
                R++;
                C=0;
            } else {
                C++;
            };
            new_matrix[R][C] = mat[i][j];
            console.log(`new_matrix[${R}][${C}] = mat[${i}][${j}]`);
        }
    }
    return new_matrix;
};


//attempt 4
//use flat
//this is again slower:   158ms   faster tahn 10.65%
//46MB, less than 28.19%


var matrixReshape = function(mat, r, c) {
    const mR = mat.length;
    const mC = mat[0].length;
    if (mR * mC  !== r*c || mR == r && mC == c) {//verify it can be reformed, or needs to be
        return mat;
    };

    //define new matrix
    const flatMat = mat.flat();
    const new_matrix = [];
    let f = 0;

    for (let i = 0; i < r; i++) {
        new_matrix[i] = [];
        for (let j=0; j < c; j++) {
           new_matrix[i][j] = flatMat[f];
           f++;
        }
    }
    return new_matrix;
};

//just ran again, and got 127ms  , aster than 42%,  and 44.9MB, less than 82%




console.log(matrixReshape([[1,2],[3,4]],1,4)); //[[1,2,3,4]]
console.log(matrixReshape([[1,2],[3,4]],2,4)); //[[1,2],[3,4]]   //can't be reformed to specs
console.log(matrixReshape([[1,2],[3,4]],4,1)); //[[1],[2],[3],[4]]


// console.log(matrixReshape());
// console.log(matrixReshape());
// console.log(matrixReshape());
// console.log(matrixReshape());
// console.log(matrixReshape());
// console.log(matrixReshape());
// console.log(matrixReshape());