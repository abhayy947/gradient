// var botton=document.getElementById("Button");
// var input=document.getElementById("input");
// var ul=document.querySelector("ul");

// function inputlength(){
// 	return input.value.length;
// }

// function createListItem(){
//     var li=document.createElement("li"); 
//     li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value="";
// }
// function addListAfterClick(){
// 	if(inputlength()>0)
// 	createListItem();
// }
//  function addListAfterKeyPressed(event){
// 	if(inputlength()>0 && event.keyCode===13)
// 	createListItem();
// }

// button.addEventListener("click",addListAfterClick);

// input.addEventListener("keypress",addListAfterKeyPressed);





 var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var gradient=document.getElementById("gradient");
function createGradient(){
  	gradient.style.background="linear-gradient( to right,"
  	+color1.value
  	+","
  	+color2.value+")";
    h3.textContent=gradient.style.background+";";
  }
  color1.addEventListener("input",createGradient)

  color2.addEventListener("input",createGradient)


 


