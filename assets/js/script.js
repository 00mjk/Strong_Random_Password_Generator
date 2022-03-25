let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let symbols = ["~","!","@","#","$","%","^","&","*","(",")","_","+","}","{",":","<",">","?","}"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];

let pw = [];

let password = document.getElementById('password').value;
let pwText = document.getElementById('passwordtext');
HTMLElement.addQuerySelectorAll();
// let ibutton = document.getElementById('initButton').addQuerySelector();

console.log(pwText)
console.log("ibutton");
console.log(typeof(initButton));

document.addEventListener('click', function(e) {
  e.preventDefault();
  requestUserInput(); 
  pwText.textContent = pw;
  }
) 



function requestUserInput() {

  var length = prompt("How many charecters would you like your password to have?");

  if (isNaN(length) === true) {
    alert("please enter a valie number");
    return;
  } 

  if (length < 8 || length > 128) {
    alert("please enter a number betweern 8 - 128 charecters");
    return;
  }

  let randInt = Math.floor(length/4);
  var numbers = prompt("Click 'ok' to confirm the addition of numbers in your in your password");  
  if (numbers === true) {
    for(i=0; i < randInt; i++) {
      pw.push(numbers[Math.floor(10*Math.random())]);
      return;
    }
  }

  var addLowerCase = prompt("Click 'ok' to confirm the addition of numbers in your in your password"); 
  if (addLowerCase === true) { 
    for(i=0; i < randInt; i++) {
      pw.push(lowerCase[Math.floor(10*Math.random())]);
      return;
    }
  }

  var addUpperCase = prompt("Click 'ok' to confirm the addition of numbers in your in your password");  
  if (addUpperCase === true) { 
    for(i=0; i < randInt; i++) {
      pw.push(upperCase[Math.floor(10*Math.random())]);
      return;
    }
  }

  var addSymbols = prompt("Click 'ok' to confirm the addition of numbers in your in your password");  
  if (addSymbols === true) { 
    for(i=0; i < randInt; i++) {
      pw.push(symbols[Math.floor(10*Math.random())]);
      return;
    }
  }

  if(length !== pw) {
    var fill = pw - length;
    for (i=0; i < fill; i++) {
      pw.push(1);    
      return
    }
  }
}

