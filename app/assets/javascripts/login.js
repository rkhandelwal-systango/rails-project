function validateForm(){
if (document.getElementById("username").value == "") {
            document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Field Cannot be black";
        }else if(document.getElementById("username").value.length<5){
  document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Should have alteast 5 characters";

} 
else{
document.getElementById('errfn').innerHTML = " ";
}


if (document.getElementById("password").value == "") {
          document.getElementById('errfn1').style.color = "#ff0000";
	  document.getElementById('errfn1').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn1').innerHTML = " ";
}
}






function validateUsername() {
        if (document.getElementById("username").value == "") {
            document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Field Cannot be black";
        }else if(document.getElementById("username").value.length<5){
  document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Should have alteast 5 characters";

} 
else{
document.getElementById('errfn').innerHTML = " ";
}
    }
function validatePassword() {
if (document.getElementById("password").value == "") {
          document.getElementById('errfn1').style.color = "#ff0000";
	  document.getElementById('errfn1').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn1').innerHTML = " ";
}
}
