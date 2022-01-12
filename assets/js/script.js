let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let special = "!@#$%^&*()_-<>>?/]["

let password = [];

let getRandNum = function(){
  let getRandNum = Math.floor(10 * Math.random());
  console.log(getRandNum);
  console.log(typeof getRandNum);
  return;
}

getRandNum();

// console.log(floor.random()*65)
// console.log(Math.ceil());

// alert("wtf do you want")
// function basePassword() {
// for (let i=0; i<9; i++) {
//   let randNum = Math.floor(Math.random()*10);
//   console.log(randNum);
//   password.push(randNum);
//   console.log(password);
//   }
// }