function starmark(item)
{
count=item.value[0];
sessionStorage.starRating = count;
}
function validate() {
var a=document.getElementById("num").value;
if(isNaN(a))
{
document.getElementById("messages").innerHTML="Enter only numeric value";
return false;
}
if(a.length<10||a.length>10)
{
document.getElementById("messages").innerHTML="Mobile number must be 10 digits";
return false;
}
if((a.charAt(0)!=9)&&(a.charAt(0)!=8)&&(a.charAt(0)!=7)&&(a.charAt(0)!=6))
{
document.getElementById("messages").innerHTML="Mobile no. must start with 9/8/7/6";
return false;
}
des = document.getElementById("comment").value;
var fb = "Thank you "+name+" for giving "+count+" star rating\n We appreciate your feedback"
console.log(fb);
alert(""+fb);
}
 