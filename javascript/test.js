//var first_name = "Sri"; --->single line commenting
/*var last_name = "Devi";
var las_name = "Dev";
var la_name = "De";
var l_name = "D";block level commenting*/

//Bad variable names(errors!!!)
/*var first name ="";
var 32last name ="";
var Math="";*/

//operators
/*
"="
"+"
"-"
"*"
"/"
"^"
"+=" (Concatenation assignment operator, with string)
*/

//output variables to the console


/*var great; // var type can be declared later and value of the var is NULL
var greeting = "Hello!!";
var first_name = "Sri";
var last_name = "Devi";
var message1 = "Welcome!";
var message2 = "Have a great day";
var favQuote = "\"Four Score.....\"";
var my_img= "<img src=\"images/myImage.png\"/>";

//use single quotes if you have a lot of illegal character
var my_img= '<img src=\"images/myImage.png\"/>';

/*console.log(greeting);
console.log(first_name + " "+ last_name);
console.log(message1);
console.log(message2);
console.log(favQuote);*/

      <!--"When angry, count ten, before you speak; if very angry, a hundred-->
      
      
var staticWord1 = "When";
var staticWord2 = ", count";
var staticWord3 = ", before you";
var staticWord4 = "; if very";
var staticWord5 = ", a";


var submit_button = document.getElementById("submit");
submit_button.addEventListener("click", onClick, false);
function onClick(evt)
{
  evt.preventDefault(evt);
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(staticWord1 +" "+ element1 + staticWord2 +" "+ element2 + staticWord3 +" "+ element3 + staticWord4 +" "+ element4 + staticWord5 +" "+ element5+".");
}





