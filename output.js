let nam;
let coll;
let email;
let mob;

function getName() {
    nam = document.querySelector('input.a').value;
}
function getColl() {
  coll = document.querySelector('input.b').value;
}
function getEmail() {
  email = document.querySelector('input.c').value;
}
function getMob() {
  mob = document.querySelector('input.d').value;
}

function Outputweb(){
console.log("Name:", nam);
console.log("College:",coll);
console.log("Email:",email);
console.log("Mobile No:",mob);
}