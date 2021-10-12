/*
1. Create an event listener for user input
2. Take user input and complete the following:
  a. check if exists, and type check
  b. format input and store it or use it for password
*/

/*
3. make a random password: possibilities
  a. generate password from user input, as in convert user info
  b. generate password as a seperate process and adjust based on the user input
    NOTE: generating from seperate process would be more modular

  4. type check the resulting password

  5. reset to default
    NOTE: since strings are immutable, and we out as string. Would the outputs persist 
    even after we clear the data. Possibly in the browser??
*/

/*
  Stretch:
 1. write tests
 2. update UI
 3. try-catch statements

 thoughts: 
         +  in JS an object is never instantiated - is it proper to think in terms of abstraction?
         +  Does the browser do this for us automatically?
         +  what else does the browser do automatically?
         +  How can I make the browser "dumber". 
         +  different between DOM, prototype, and ..
         
*/

/* Declare Variables */
let userInput;
let userData = [];
let password;
/* Data Sheet */
let upCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Q",
    "X",
    "Y",
    "Z",
];
let lowCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
let symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "<",
    ">",
    ">",
    "?",
    "/",
];

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Math.random());


document.getElementById("generate").addEventListener("click", function(){
    let lowerC = prompt("Should your password contain lower case characters?", "enter yes or no");
    let upperC = prompt("Should your password contain upper case characters?", "enter yes or no");

});

// var lowerC = prompt("Should your password contain lower case characters?", "enter yes or no");

// if (lowerC != null) {
//     document.getElementById("userName").innerHTML;
//     userData.push(person);
//     console.log(userData);
//     "Hello " + person + "! How are you today?";
// } else {
//     prompt("Please enter a valid name");
// }

// var lowerC = prompt(
//     "Should your password contain upper case characters?",
//     "enter yes or no"
// );

/* Config to accept user input  */
var generateBtn = document.querySelector("#generate");

// var userPrompt = prompt("hello, please enter your name", " ");
generate.addEventListener(onclick, (e) => {
    e.preventDefault;
    userInput = lengthDOM.value;
    return userInput;
});
