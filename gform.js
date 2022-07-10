document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  console.log(input);
  pushToDOM(input);
});

function pushToDOM(input) {


  var names= document.querySelector(".js-Name");
  names.innerHTML = input;


}
document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  console.log(input);
  pushToDOM(input);
});

function pushToDOM(input) {


  var colleges= document.querySelector(".js-College");
  colleges.innerHTML = input;


} 