
/* ####  DATA SHEET  #### */
let uppCase = ["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "X","Y","Z"];
let lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let symbols = ["!","@","#","$","%","^","&","*","(",")","_","-","<",">",">","?","/"];
let userInput;

let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let LC = "abcdefghijklmnopqrstuvwxyz"

let password = [];

/* ### HELLA ### */
let a = Math.random();
let b = a*10;
let c = Math.floor(Math.random()*30);

console.log(a);
console.log(b);
console.log(c);
console.log("hello");
console.log(uppCase);

for (let i = 0; i < uppCase.length; i++) {
  console.log(i);
}

console.log("=========");

for (let i = 0; i < lowCase.length; i++) {
  console.log(i);
}

password.push("A")
console.log(password)

console.log(String.fromCharCode(65))
console.log(String.fromCharCode(66))
console.log(String.fromCharCode(67))
console.log(String.fromCharCode(68))
console.log(String.fromCharCode(69))
console.log(String.fromCharCode(70))
console.log(String.fromCharCode(71))
console.log(String.fromCharCode(72))
console.log(String.fromCharCode(73))
console.log(String.fromCharCode(74))
console.log(String.fromCharCode(75))
console.log(String.fromCharCode(76))
console.log(String.fromCharCode(77))
console.log(String.fromCharCode(78))
console.log(String.fromCharCode(79))
console.log(String.fromCharCode(90))
console.log(String.fromCharCode(81))
console.log(String.fromCharCode(82))
console.log(String.fromCharCode(83))
console.log(String.fromCharCode(84))
console.log(String.fromCharCode(85))
console.log(String.fromCharCode(86))
console.log(String.fromCharCode(87))
console.log(String.fromCharCode(88))
console.log(String.fromCharCode(89))


let st = String.fromCharCode(90)
st
// console.log(st)

console.log(typeof(st))

// console.log(floor.random()*65)

// console.log(Math.ceil());


// alert("wtf do you want")
function basePassword() {
for (let i=0; i<9; i++) {
  let randNum = Math.floor(Math.random()*10);
  console.log(randNum);
  password.push(randNum);
  console.log(password);
  }
}