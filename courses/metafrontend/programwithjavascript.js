//Resources:
/*
Mozilla Developer Network Expressions and Operators                 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
Mozilla Developer Network Operator Precedence and Associativity     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
JavaScript Primitive Values                                         https://developer.mozilla.org/en-US/docs/Glossary/Primitive
ECMA262 Specification                                               https://tc39.es/ecma262/
jQuery Official Website                                             https://jquery.com/
React Official Website                                              https://reactjs.org/
StackOverflow Developer Survey 2021 Most Popular Technologies       https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies
Emojis                                                              http://unicode.org/emoji/charts/full-emoji-list.html#1f600


Additional resources for Conditionals and Loops                     
Comparison Operators                                                https://www.javascripttutorial.net/javascript-comparison-operators/
Truthy                                                              https://developer.mozilla.org/en-US/docs/Glossary/Truthy
Falsy                                                               https://developer.mozilla.org/en-US/docs/Glossary/Falsy
Conditional statements                                              https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals


Arrays, Objects and Functions
JavaScript Functions                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
JavaScript Object Basics            https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
typeof operator in JavaScript       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Arrays are "list-like objects"      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays


Error Handling
MDN functions                       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
MDN try...catch                     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
Iteration protocols                 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
The Math object on MDN              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
The String object on MDN            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
MDN JavaScript error reference      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
null                                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
undefined                           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined


Functional Programming
MDN Functions Guide                     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
MDN Glossary: Recursion                 https://developer.mozilla.org/en-US/docs/Glossary/Recursion
MDN Glossary: Scope                     https://developer.mozilla.org/en-US/docs/Glossary/Scope
Functional Programming in JavaScript    https://www.toptal.com/javascript/functional-programming-javascript
MDN: First-class functions              https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function


Object Oriented Programming
Constructor                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
Classes                                 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Object-oriented programming             https://css-tricks.com/the-flavors-of-object-oriented-programming-in-javascript/
Regular Expressions in JavaScript       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
RegExp object in JavaScript             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


Advanced JavaScript Features
Template literals                       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Arrow functions                         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
Spread syntax                           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Rest parameters                         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
JavaScript data structures              https://data-flair.training/blogs/javascript-data-structures/


JavaScript in the Browser               
MDN: Modules                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
Nodejs.org official docs on CommonJS    https://nodejs.org/api/modules.html#modules-commonjs-modules
MDN: DOM                                https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
MDN: Document.querySelector             https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
MDN: Event                              https://developer.mozilla.org/en-US/docs/Web/API/Event
MDN: EventTarget.addEventListener       https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
MDN: Working with JSON                  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

*/



//data types: string, number, boolean, Null, undefined... as of ES6: BigInt (2^53), Symbol

//Empty values
//      Null - intential absence of any object value
//      Undefined
//      Empty String

//operators:
//      math    +-/*  standard
//              ** exponential  >>  10**2 == 100
//              %  modulus or remainder >>  9%8 == 1, 16%8 == 0
//      comparison:  <   >  less than & greater than
//                  ==  equal to
//                  === strict equal to (type and value)
//                  !=  !==   not equal to & strict version
//      logical:
//               && and
//               || or
//               !  not
//      other:
//          +=  addition assignment & concatenation assignment

//Truthy:  value true in boolean context, ALL values are truthy unless defined as flasy

//Falsy:    includes:   false, 0, -0, 0n, "", null, undefined, and NaN

//conditional (ternary) operator:   condition ? exprIfTrue : exprIfFalse;
//                      chained:    condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : valueElse;
//          It is looking for truthy

//math object
//number constants
Math.PI;     //pi
Math.E;      //Euler's constant
Math.LN2;    //natural log of 2

//rounding
var x = 1.4;
Math.ceil(x);   //rounds up to closest integer
Math.floor(x);  //rounds down to closest integer
Math.round(x);  //rounds up if decimal is >= .5, else down
Math.trunc(x);  //trims the decimal

//arithmatic and calc
Math.pow(2,3);  //  2 to the power of 3
Math.sqrt(16);  //  sq root of 16
Math.cbrt(8);   // cube root of 16
Math.abs(-10);  // absolute value

Math.random   // generates decimal between 0 and 0.99

//strings
var str = "This is a string";
str.charAt(0);  //return char at index
str.concat('another str');  //concat two strings
str.indexOf('str'); //returns first position
str.lastIndexOf('str'); //returns last position
str.split("d"); //split into array on delimiter
str.toUpperCase();
str.toLowerCase();

//template literals,  alt method of working with strings
//      allos variable interpoliation, can span multiple lines, allows expression evaluation
//      TODO: read about ested template literals, tagged templates

var templateliteral = `string text ${expression} string text`;
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


//errors:
//      SyntaxError: invalid JS
//      TypeError:  attempting to run method on unsupported datatype
//      ReferenceError: example: undecared variable
//      RangeError: 

try {
    //throw new Error();
    //throw new ReferenceError():
} catch (err) {
    
};

//Functional Programming - separation between data and functions
//      First Class Functions > values that can be passed to other unctions, saved ina variable, return form other functions
//          AKA:  first-class citizes
//      Higher Order Function > 
//              accepts other functions as arguments   AND/OR   returns functions when invoked
//      Pure Functions
//          returns the same result as long as it's given the same values
//          do not have side effects
//              side effects == change variable outside function, or rely on outside variables
//                              call browser API
//                              Call Math.random, since it can't be repeatd

//Block Scope:   let const

//Object-Oriented Programming (OOP)
//          mimics objects in real world, modular code, flexible code, reusable code
//  4 Priciples:
//      Inheritance: sub class inherit from super
//      Encapsulation: don't need to know the code to use it
//      Abstractions:  confused w/ encaspulation, but about making code more generalized
//      Polymorphism:  same function produces different result based on contect, or same function name different outcome

// An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 
//Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.


//conditional & loops
if (condition) {
    
} else if (condition) {
 
} else {
}
switch (key) {
    case value:
        
        break;
    default:
        break;
}


switch (key) {
    case value:
        
        break;
    default:
        break;
}

//Variable names "i" and "j" are considered best practice for nested loops
for (let index = 0; index < array.length; index++) {  //set value; condition; increment counter
    const element = array[index];
}

//Set counter outside while loop
while (condition) {  
//Increment counter value inside
}

const car = {
    engine: true
} //created car prototype
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

//for-in loop does work with objects
for (prop in sportsCar) {
    console.log(prop); //output includes properties from the prototype car
}
for (prop of Object.keys(sportsCar)) {
    console.log(prop, ":", sportsCar[prop]);  //for-of only has sportsCar properties
}



//data structures
//  array: ordered, iterable collection of values
//  Object: unordered, non-iterable collection of key-value pairs;
//  Map: iterable key value pairs
//      diff from object:  keys can be anything, in an object a key must be a string or sybmol
//  Set: collection where each item must be unique


//arrays
var arr = [];
arr.forEach(() => {});
arr.forEach(function(a) {});
arr.filter();  //returns new array filtering results
arr.map();   //basically a for each that creates a new array with dependent values

//objects

//can't use for-of loops direclty on objects b/c not iterable
//use built in methods
var testobject = {};
Object.keys(testobject);  //returns array of keys
Object.values(testobject); //returns array of values for keys
Object.entries(testobject); //returns key:value pairs  //[ ['speed', 400], ['color', 'magenta'] ]

//classes
class ClassName { //should be capitalized
    constructor(parameter1,parameter2) {
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
    methodName1() {   //don't use function keyword
        //add as many methods as needed
    }
}
const object1 = new ClassName("parameter1value","parameter2value");
//This is less used, but same: 
var object2 = Object.create(ClassName);

//constrctors
//native objects include: Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
//      construcotrs create new instances of them, not available for all, ex: there is not a new Math()

new Date();

//dont use contructors on primitive types: string, number, boolean   >>     less performant
//use object literal instad of new Object,  same for array, function, RegExp, and pattern literal     [], () {}, and /()/.

// good use
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();

//inheritance/hierarchy

//prototyping
//      create an object w/ properites, create a new instince of it using Object.Create(exisiting objectname)
//      console.log it.  Have access to the properties of original object
//better to use classes


class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);  //built in JS method
        console.log(proto);
    }
}
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);                    //pulls in values from super class
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {                         //new method for subclass
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {            //overrides method in superclass
        super.toggleLights();    //invokes all of superclass method
        super.lightsStatus();      //also this one
        console.log('Lights are 100% operational.');     //and adds some custom code
    }
};


//Class instances can be used as properties in another class constructor
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}
class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}
class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

//default parameters
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}


class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6



//maps: no inheritance, no prototypes
//use map constructor
let testmap = new Map();
testmap.set(1, "a value");  //and so on
testmap.get(1); //returns "a value"


//sets, use set constructor to create, can accept an array, quick way to filter for unique values
const testset = new Set(arr);

//Other data structures not built into JS, but can be custom built
//  Queues, Linked lists (singly-linked & double-linked), Trees, Graphs
//  TODO: learn about these data structures

//Desctucturing arrays and objects
let {PI} = Math;  //console.log(PI) returns correct value becaue PI already exists in Math
                  //  PI  === Math.PI
                  //  PI = 1;  works, PI is separate and can be reassignd;
let {pi} = Math;  //doesn't work, returns undefined, beacuse pi doesn't exist in Math

//TODO: read more on descructuring

//spread operator  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
//new to ES6, shortest/simplest way to copy properties to a new object, three dots  ...

let top3 = ["Place1","Place2","Place3" ]
function showItinerary (place1,place2,place3){
    //code
};
showItinerary(top3[0],top3[1],top3[2]); //difficult to add in tons of values can be simplified
//same as
showItinerary(...top3);

//Rest operator    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property 
//opposit of spread operator
//join arrays, objects    note: only performs a shallow copy of source array/object

//join arrays
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate

//join objects
const flying = { wings: 2 };
const auto = { wheels: 4 };
const flyingAuto = {...flying, ...auto}; // {wings: 2, wheels: 4}

//add new members to array without the push method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];//['onion', 'parsley', 'carrot', 'beetroot']

//convert a string to an array
const greeting = "Hello";
const arrayOfChars = [...greeting];

//javascript in the browser
//DOM manipulaiton
Document.querySelector('p') //static
Document.querySelectorAll('p')
Document.getElementById('hello'); //live
Document.getElementsByClassName('txt');


//event handling
//addEventListener(type, function);

//JSON
const jsonStr = '{"greeting":"hello"}';
const aPlainObj = JSON.parse(jsonStr);
console.log(aPlainObj); //{ greeting: 'hello' }
aPlainObj.greeting = 'hi'; //value of greeting property can be changed
console.log(aPlainObj); //{ greeting: 'hi' }
const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello"
}
console.log(JSON.stringify(data)); //{"firstName":"John","lastName":"Doe","greeting":"Hello"}

//using modules   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

//      dependent on import and export statements

//step 1 - export
//can export var, let, const, and classes
export const name = 'square';
export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}

//combine in a single export line
export { name, draw };

//step 2 - import
import { name, draw } from './modules/square.js';  //  the '.' syntax means 'current location', rather than entire relative path

//step 3 - apply module to html
//    <script type="module" src=""></script>

// or embed it

//<script type="module">
  /* JavaScript module code here */
//</script>



//style cosole output
//  Add %c to string, then follow with valid CSS

console.log("%cHello, World", "color: blue; font-size: 40px");
