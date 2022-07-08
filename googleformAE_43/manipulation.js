function myFunction() {
    const x = document.forms["googleformdata"];
   let Name = x.elements[0].value;
   let College = x.elements[1].value; 
   let Email = x.elements[2].value;
   let  phonenumber= x.elements[3].value

console.log("Name =",Name);
console.log("College =",College);
console.log("Email =",Email);
console.log("phonenumber =",phonenumber);
}