var total_items = 12;
function CalculateItemsValue() {
var total = 0;
var service = 0;
for (i=1; i<=total_items; i++) {

itemID = document.getElementById("qnt_"+i);
if (typeof itemID === 'undefined' || itemID === null) {
alert("No such item - " + "qnt_"+i);
} else {
total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
}
}

document.getElementById("ItemsTotal").innerHTML = "" + total;
localStorage.setItem("val",total);

}
function popup() {
popup = window.open("invoice.html","Popup","width=500,height=500");
}  
