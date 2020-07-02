function CalculateItems() {

var total;
var service;
var tax;
var total = parseInt(localStorage.getItem("val"));

console.log(total);

if (total<1000) {
service = 50;
}
else
service = 0;

beforetax = total + service;
tax = beforetax*0.05;
tot = beforetax + tax;

document.getElementById("ItemsTotal").innerHTML = "" + total;
document.getElementById("serv").innerHTML = "" + service;
document.getElementById("beftax").innerHTML = "" + beforetax;
document.getElementById("tax").innerHTML = "" + tax;
document.getElementById("tot").innerHTML = "" + tot;
}
  