//1232. Check if it is a straight line

/*
contains graphics: leetcode
https://leetcode.com/problems/check-if-it-is-a-straight-line/?envType=study-plan&id=programming-skills-i

*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

//attempt 1
//worng answer inpuit [[0,0],[0,1],[0,-1]]

//attempt 2
//worng answer input [[1,2],[2,3],[3,5]]

//attempt 3
//wrong answer [[0,1],[-6,-17],[3,10],[-7,-20],[1,4],[4,13],[9,28],[7,22]]
//I was getting some kind of error by having zeros

 var checkStraightLine = function(coordinates) {
    if (coordinates.length <= 2){
        return true;
    };
    
    // slope = y1-y2/x1-x2  =   y2-y3/x2-x3
    //   (x2-x3)*(y1-y2) = (y2-y3)*(x1-x2)

    // dY/dX = Y/X
    // X*dY  = Y * dX

    let dX = coordinates[0][0]-coordinates[1][0];
    let dY = coordinates[0][1]-coordinates[1][1];
    
    for (var i=1; i<coordinates.length-1; i++){
        let x = coordinates[i][0]-coordinates[i+1][0];
        let y = coordinates[i][1]-coordinates[i+1][1];

       if (x*dY != y *dX) {
            return false;
       };

    //    let d1 = Math.sqrt((coordinates[a][0] - coordinates[b][0])**2 + (coordinates[a][1] - coordinates[b][1])**2);
    //    let d2 = Math.sqrt((coordinates[a][0] - coordinates[c][0])**2 + (coordinates[a][1] - coordinates[c][1])**2);
    //    let d3 = Math.sqrt((coordinates[b][0] - coordinates[c][0])**2 + (coordinates[b][1] - coordinates[c][1])**2);
    //    let s = (d1+d2+d3)/2;
    //    let A = Math.sqrt(s*(s-d1)*(s-d2)*(s-d3));
    //    if (A !== 0) {
    //     return false;
    //    }

       //console.log(`${coordinates} => s1: ${slope1}; s2: ${slope2}; s3: ${slope3}; A: ${A}`)
    };
    return true;
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));//true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));//false
console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));//true
console.log(checkStraightLine([[1,2],[2,3],[3,5]]));//false
console.log(checkStraightLine([[0,1],[-6,-17],[3,10],[-7,-20],[1,4],[4,13],[9,28],[7,22]])); //true