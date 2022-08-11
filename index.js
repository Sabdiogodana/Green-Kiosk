document.body.style.backgroundColor='silver'
// let back=document.querySelector('body');
// document.title.style.color="green"
document.getElementById("title").style.color="green"
// word[0]. toUpperCase(); "h3"
let title=document.querySelectorAll("h3").forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase())

const addElement = document.createElement("li")
addElement.appendChild(document.createTextNode("Pears"))
let Pears=document.getElementById("fruList").appendChild(addElement)

let addvege=document.createElement("li")
addvege.appendChild(document.createTextNode("Cabbage"))
let Cabbage=document.getElementById("vegList").appendChild(addvege)


var changeColor=document.getElementById("color")
changeColor.style.backgroundColor="silver";
var fontColor=document.getElementById("title")
fontColor.style.color="green";

document.getElementById("fruits").style.textTransform="uppercase";
document.getElementById("vegetables").style.textTransform="uppercase"

var fruits=document.createElement("li")
var fruitlist=document.createTextNode("Apple")
fruits.appendChild(fruitlist);
var newelement=document.getElementById("fruitList")
newelement.appendChild(fruits)

var vegetables=document.createElement("li")
var veglist=document.createTextNode("Spinach")
vegetables.appendChild(veglist)
var newelement=document.getElementById("vegList")
newelement.appendChild(vegetables)

// Change document background color to
// silver
// Change the font color for h1 title tag to
// green
// Change the font case for h3 title tags to
// uppercase
// Add one more fruit to the fruits list
// Add one more vegetable to the vegetables
