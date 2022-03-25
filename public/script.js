
// Array w. upper case charecters to include in password
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array w. lower  case charecters to include in password
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array w. special charecters to include in password
let special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "{", "|", "}", "~"];

// Array w. numberic charecters to include in password
let numberic = ["0","1","2","3","4","5","6","7","8","9"];

let obj;

// function to prompt user for desired password parameters
function passwordOptions() {
  var length = parseInt(
    prompt('How many charecter do you want your password to include?')
    );

    // conditional to check if user input is a number
    if(isNaN(length) === true) {
      alert('entered value is not a number, please try again');
    }

    // conditional to check if user input larger than 8 charecters
    if(length < 8){
      alert('please enter a value larger than 8 charecters');
    }

    let obj =  [
       {"true": "hasNumericCharecters"},
      {"true": "hasLowerCaseCharecters"},
      {"true": "hasUpperCaseCharecters"},
      {"true": "hasSpecialCharecters"}
    ]

    // confirmation popup for user to confirm if password should contain numbers
    var hasNumericCharecters = confirm("click ok too include 'numbers' in password. click cancel to omit 'numbers'");
    if(hasNumericCharecters !== true) {
      obj.pop();
      console.log(obj)
      return obj;
    } else {

     // confirmation popup for user to confirm if password should contain lower numbers letters
    var hasLowerCaseCharecters = confirm("click ok to include 'lower case charecters' in password. click cancel to omit 'lower case charecters'");
    if(hasLowerCaseCharecters !== true) {
      obj.pop();
      console.log(obj)
    } 
  } else {

    // confirmation popup for user to confirm if password should contain upper case letters
    var hasUpperCaseCharecters = confirm("click ok to include 'upper case charecters' in password. click cancel to omit 'upper case charecters'");
    if(hasUpperCaseCharecters !== true) {
      obj.pop();
      console.log(obj)
    }
  } else {

     // confirmation popup for user to confirm if password should contain special characters
    var hasSpecialCharecters = confirm("click ok to include 'special charecters' in password. click cancel to exclue 'special charecters'");
    if(hasSpecialCharecters === true){
      obj.pop;
      console.log(obj)
      return obj;
    }
  }
}


let init = document.getElementById('initButton');
init.addEventListener('click', function(e){
  e.preventDefault();
  passwordOptions();
})

console.log(obj)
let pw = [];
let numeric = String.fromCharCode["48", "49", "50", "51", "52", "53", "54", "55", "56", "57"]
let upper = String.fromCharCode(69, 70, 80, 81, 72, 69, 76, 76, 79, 80, 81, 82, 83, 83, 84, 85, 86, 87, 88, 89, 90); 
let lower = String.fromCharCode(99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 97, 98)
let symbolic = String.fromCharCode(91, 92, 93, 123, 124, 125, 126, 90, 91, 92, 93, 94, 95, 96)
// let num = pop.numeric[Math.floor(20*Math.random())]
// console.log(num);
// console.log(pw)

// console.log(numeric)
// console.log(numeric[1])
// console.log(numeric[2])
// console.log(numeric[3])
// console.log(numeric[4])
// console.log(small)
// console.log(upper)
// console.log(numeric)






// alert('hello')
// let hey = confirm("confirm hello");
// console.log(typeof(hey))
// let two = confirm("can you confim")
// console.log(typeof(two))



// document.addEventListener('click', function(e) {
//   e.preventDefault();
//   requestUserInput(); 
//   pwText.textContent = pw;
//   }
// ) 


// /*  */
// function requestUserInput() {

// /*  */
//   var length = prompt("How many charecters would you like your password to have?");

//   if (isNaN(length) === true) {
//     alert("please enter a valie number");
//     return;
//   } 


//   /*  */
//   if (length < 8 || length > 128) {
//     alert("please enter a number betweern 8 - 128 charecters");
//     return;
//   }

// /*  */
//   let randInt = Math.floor(length/4);
//   var numbers = prompt("Click 'ok' to confirm the addition of numbers in your in your password");  
//   if (numbers === true) {
//     var randIt = length/4;
//     for(i = 0; i < rand; i++) {
//       pw.push(numbers[Math.floor(10*Math.random())]);
//       return;
//     }
//   }


// /*  */
//   var addLowerCase = prompt("Click 'ok' to confirm the addition of numbers in your in your password"); 
//   if (addLowerCase === true) { 
//     for(i=0; i < randInt; i++) {
//       pw.push(lowerCase[Math.floor(10*Math.random())]);
//       return;
//     }
//   }


// /*  */
//   var addUpperCase = prompt("Click 'ok' to confirm the addition of numbers in your in your password");  
//   if (addUpperCase === true) { 
//     for(i=0; i < randInt; i++) {
//       pw.push(upperCase[Math.floor(10*Math.random())]);
//       return;
//     }
//   }

// /*  */
//   var addSymbols = prompt("Click 'ok' to confirm the addition of numbers in your in your password");  
//   if (addSymbols === true) { 
//     for(i=0; i < randInt; i++) {
//       pw.push(symbols[Math.floor(10*Math.random())]);
//       return;
//     }
//   }

// /*  */
//   if(length !== pw) {
//     var fill = pw - length;
//     for (i=0; i < fill; i++) {
//       pw.push(1);    
//       return
//     }
//   }
// }

function check() {
  var self = this,
      args = arguments;
  return new Promise(function (resolve, reject) {
    var gen = fn.apply(self, args);

    function _next(value) {
      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
    }

    function _throw(err) {
      asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
    }

    _next(undefined);
  });
};

// TEXT TO SPEECH
{/* <script type="application/javascript"> */}
    function startSearch(event) {
        event.target.form.submit();
    }
// </script>
