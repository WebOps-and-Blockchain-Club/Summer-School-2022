document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  console.log(input);
  pushToDOM(input);
});

function pushToDOM(input) {

 
  var names= document.querySelector(".js-names");
  names.innerHTML = input;
  

}
document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  console.log(input);
  pushToDOM(input);
});

function pushToDOM(input) {

 
  var colleges= document.querySelector(".js-colleges");
  colleges.innerHTML = input;
  

}