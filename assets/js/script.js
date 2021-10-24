/* Pseudocode:
-------------------------------------------------------------------------------------------
  1. Create an event listener for user input

  2. Take user input and complete the following:
      a. check if exists, and type check
      b. format input and store it or use it for password
      
  3. make a random password: possibilities
      a. generate password from user input, as in convert user info
      b. generate password as a seperate process and adjust based on the user input
          

  4. type check the resulting password

  5. reset to default

  since strings are immutable, and we out as string. Would the outputs persist 
            even after we clear the data. Possibly in the browser??
-------------------------------------------------------------------------------------------*/

/* Data Sheet */
let upCase  = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X","Y","Z"];
let lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let symbols = ["!","@","#","$","%","^","&","*","(",")","_","-","<",">",">","?","/"];
/* Declare Variables */
let userInput;
let password = [];


/* Functions */ 
function basePassword() {
for (let i=0; i<9; i++) {
  let randNum = Math.floor(Math.random()*10);
  console.log(randNum);
  password.push(randNum);
  console.log(password);
  }
}


function addLowCase(){
  let lowerCase = lowCase[Math.floor(Math.random()*26)];
      for (let i=9; i<16; i++){
      console.log(lowerCase);
      password.push(lowerCase);
    }
}


function addUpCase() {
  let upperCase = upCase[Math.floor(Math.random()*26)];
  password.push(upperCase)
}
for (let i=16; i<22; i++){
    addUpCase();
}


function addSymbols(){
  let sym = symbols[Math.floor(Math.random()*17)];
  console.log(sym)
  password.push(sym)
}
for (i=18; i<24; i++){
  addSymbols()
}

// ===============================================================================

function prompt1 () {
  let lowCaseQ = prompt("include lower case characters?", "enter y or n")
  console.log(lowCaseQ)
  if (lowCaseQ.length === "y" || lowCaseQ === "n") {
    addLowCase();
  } else {
    console.log("lowercase excluded")
     }
  }

function prompt2 () {
  let upCaseQ = prompt("include upper case characters?", "enter y or n")
  if (upCaseQ  === "y" ||  upCaseQ === "n") {
    addUpCase();
  } else {
    console.log("no upper case charecters added")
  }
}

function prompt3 () {
  let symbolsQ = prompt("include symbols in password?", "enter y or n")
  if (symbolsQ  === "y" ||  symbolsQ === "n") {
    addSymbols();
  } else {
    console.log("no symbols added")
  }
}

// ===============================================================================
function formatArray() {
  password.sort();
}

function initApp() {
document.getElementById("generate").addEventListener("click", (e) =>{
  e.preventDefault
  basePassword();
  prompt1();
  prompt2();
  prompt3();
  formatArray()
  document.getElementById('password').innerText = password.join('');
  });
}
initApp()