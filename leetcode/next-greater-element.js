//496. Next Greater Element I
//leetcode
//easy

/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 

Constraints:

1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.
 

Follow up: Could you find an O(nums1.length + nums2.length) solution?
*/

//atempt 1
//had to learn about hash tables
//after that, start 2:19p
//didn't need it, but took 30 minutes
//136ms faster than 12.99%
//48.7MB less than 5.53%


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement2 = function(nums1, nums2) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++){
        let val = nums1[i];
        let j = nums2.indexOf(val);
        if (j + 1 == nums2.length) {
            arr.push(-1);
        } else {
            let ta = nums2.slice(j);
            let k = ta.findIndex((el) => el > val);
            let result = (k == -1) ? -1 : nums2[k + j];
            arr.push(result);
        }
    }
    return arr;
};

//attempt2
//121ms faster than 25.21%
//same memory

//a few changes
//115ms faster than 33.59%
//54.3mb  less than 54%

var nextGreaterElement3 = function(nums1, nums2) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++){
        let val = nums1[i];
        let j = nums2.indexOf(val);
        
        if (j + 1 == nums2.length) {
            arr.push(-1);
        } else {
            //let ta = nums2.slice(j);
            let k = nums2.find(function(el,index) {
                return index > j && el > val; 
            });
            let result = (k === undefined) ? -1 : k;
            arr.push(result);
        }
    }
    return arr;
};


//trying a bit different
//barely faster:   111ms   faster than 39.82%

var nextGreaterElement44 = function(nums1, nums2) {
    let arr = [];

    for (let i = 0; i < nums1.length; i++){
        let val = nums1[i];
        let next = -1;

        for (let j = nums2.indexOf(val) + 1; j < nums2.length; j++) {
            if (nums2[j] > val) {
                next = nums2[j];
                break;
            };
        };
        arr.push(next);
    }
    return arr;
};


//hashing it up a bit, returned ok, but not better
//stepping it up, winner
//104ms  faster than 50.5%
//44.7mb  less than 23.75%

//good info
//https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b

var nextGreaterElement5 = function(nums1, nums2) {
    let m = new Map();
    let r = new Map();
    let l = nums2.length;
    for (let i = 0; i <  l; i++) {
        m.set(i,nums2[i]);
        r.set(nums2[i],i);
    };

    return nums1.map(function(n){
        let next = -1;
        for (let j = r.get(n) + 1; j < l; j++) {
            if (m.get(j) > n) {
                next = m.get(j);
                break;
            };
        };
        return next;
    });
};


//on last attemp
//not faster, stick w/ map
var nextGreaterElement = function(nums1, nums2) {
    let m = {};
    let r = {};
    let l = nums2.length;
    for (let i = 0; i <  l; i++) {
        m[i] = nums2[i];
        r[nums2[i]] = i;
    };

    return nums1.map(function(n){
        let next = -1;
        for (let j = r[n] + 1; j < l; j++) {
            let x = m[j];
            if (x > n) {
                next = x;
                break;
            };
        };
        return next;
    });
};


console.log(nextGreaterElement([4,1,2],[1,3,4,2])); //Output: [-1,3,-1]

console.log(nextGreaterElement([2,4],[1,2,3,4])); //[3,-1]

console.log(nextGreaterElement([3,1,5,7,9,2,6],[1,2,3,5,6,7,9,11])); //[5,2,6,9,11,3,7]
//wrong[5,2,6,9,-1,3,7]


//https://blog.sessionstack.com/how-javascript-works-arrays-vs-hash-tables-ab769bf84a2d
//building out an arry

class CustomArray{
    constructor(){
        this.data = {}
        this.length = 0
    }
    access(index){
        return this.data[index];
    }
    push(value){
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }
    pop(){
        const lastValue = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastValue;
    }
}

//https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/

//creating a hash table class
// class HashTable {
//     constructor(){
//         this.table = new Array(127);
//         this.size = 0;
//     }
//     _hash(key) { //_ denotes private method, creating hash
//         let hash=0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         };
//         return hash % this.table.length;//keep has within 127 buckets, table size
//     }
//     set(key, value) {
//         const index = this._hash(key);
//         this.table[index] = [key, value];
//         this.size++;
//     }
//     get(key) {
//         const index = this._hash(key);
//         return this.table[index];
//     }
//     remove(key){
//         const index = this._hash(key);
//         if (this.table[index] && this.table[index].length) {
//             this.table[index] = undefined;
//             this.size--;
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

//above allows for index collision
//in that situation, create secondary arrays
class HashTable {
    constructor() {
      this.table = new Array(127);
      this.size = 0;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    set(key, value) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++;
    }
  
    get(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    remove(key) {
      const index = this._hash(key);
  
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        return false;
      }
    }
  
    display() {
      this.table.forEach((values, index) => {
        const chainedValues = values.map(
          ([key, value]) => `[ ${key}: ${value} ]`
        );
        console.log(`${index}: ${chainedValues}`);
      });
    }
  }