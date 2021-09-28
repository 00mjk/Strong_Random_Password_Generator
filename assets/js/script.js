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
let userData = {};
let password;
const userOutput;

/* Config to accept user input  */
var generateBtn = document.querySelector("#generate");



// var userPrompt = prompt("hello, please enter your name", " ");

Document.addEventListener(onclick, (e) => {
  e.preventDefault;
  userInput = lengthDOM.value;
  return userInput;
})


const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');


reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

let babel = window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});


/* Generate a random password */
// Math.random.floor
// array1.forEach(element => console.log(element));
// console.log(ASC.length);


// for (let i = 0; i < screen.length; i++) {
//    let code = s.charCodeAt(i);
//    ASC.push(code)
}


/* If Input passes type check, then output pw to user */



/* add users name to array & reset  */
