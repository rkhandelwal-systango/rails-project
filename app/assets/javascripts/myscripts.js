$( document ).ready(function() {
  $("#form_submission").click(function() {
    alert( "Validating" );
    validateForm();
  });
});
function validateForm(){

if (document.getElementById("users_first_name").value == "") {
            document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Field Cannot be black";
        }else if(document.getElementById("username").value.length<5){
  document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Should have alteast 5 characters";

} 
else{
document.getElementById('errfn').innerHTML = " ";
}


if (document.getElementById("users_last_name").value == "") {
          document.getElementById('errfn1').style.color = "#ff0000";
    document.getElementById('errfn1').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn1').innerHTML = " ";
}


if (document.getElementById("users_password").value == "") {
          document.getElementById('errfn2').style.color = "#ff0000";
    document.getElementById('errfn2').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn2').innerHTML = " ";
}


if (document.getElementById("users_password_confirmation").value == "") {
          document.getElementById('errfn3').style.color = "#ff0000";
    document.getElementById('errfn3').innerHTML="  ** Field Cannot be black";
        }else{
var password = document.getElementById("users_password").value;
var confirmPassword = document.getElementById("users_password_confirmation").value;
        if (password != confirmPassword) {
           document.getElementById('errfn3').style.color = "#ff0000";
           document.getElementById('errfn3').innerHTML=" ** confirm password and password field do not match";
        }else{
document.getElementById('errfn3').innerHTML=" ";
}
      
}


if (document.getElementById("users_city").value == "") {
          document.getElementById('errfn4').style.color = "#ff0000";
    document.getElementById('errfn4').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn4').innerHTML = " ";
}


if (document.getElementById("users_state").value == "") {
          document.getElementById('errfn5').style.color = "#ff0000";
    document.getElementById('errfn5').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn5').innerHTML = " ";
}


if (document.getElementById("users_country").value == "") {
          document.getElementById('errfn6').style.color = "#ff0000";
    document.getElementById('errfn6').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn6').innerHTML = " ";
}


if (document.getElementById("users_address").value == "") {
          document.getElementById('errfn7').style.color = "#ff0000";
    document.getElementById('errfn7').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn7').innerHTML = " ";
}


if (document.getElementById("users_email").value == "") {
          document.getElementById('errfn8').style.color = "#ff0000";
    document.getElementById('errfn8').innerHTML="  ** Field Cannot be black";
        }else{
    var g = document.getElementById("users_email").value; 
var h = document.getElementById("users_email").value; 
var count1 = (g.match(/@./gi) || []).length;
var count = (h.match(/[!+#$%^&*()]/g) || []).length;

    var atpos = g.indexOf("@");
    var dotpos = g.lastIndexOf(".");
    if (count >0 ||count1>1 ||atpos<1 || dotpos<atpos+2 || dotpos+2>=g.length) {
        document.getElementById('errfn8').style.color = "#ff0000";
document.getElementById('errfn8').innerHTML="  ** Please enter valid Email-ID";
    }
else{
document.getElementById('errfn8').innerHTML=" ";
}
}



}


function validateUsername() {
        if (document.getElementById("users_first_name").value == "") {
            document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Field Cannot be black";
        }else if(document.getElementById("users_first_name").value.length<5){
  document.getElementById('errfn').style.color = "#ff0000";
            document.getElementById('errfn').innerHTML="  ** Should have alteast 5 characters";

} 
else{
document.getElementById('errfn').innerHTML = " ";
}
    }
function validateLastname() {
if (document.getElementById("users_last_name").value == "") {
          document.getElementById('errfn1').style.color = "#ff0000";
    document.getElementById('errfn1').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn1').innerHTML = " ";
}
}


function validatePassword() {

if (document.getElementById("users_password").value == "") {
          document.getElementById('errfn2').style.color = "#ff0000";
    document.getElementById('errfn2').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn2').innerHTML = " ";
}
}

function validateConfirmPassword() {

if (document.getElementById("users_password_confirmation").value == "") {
          document.getElementById('errfn3').style.color = "#ff0000";
    document.getElementById('errfn3').innerHTML="  ** Field Cannot be black";
        }else{
var password = document.getElementById("users_password").value;
var confirmPassword = document.getElementById("users_password_confirmation").value;
        if (password != confirmPassword) {
           document.getElementById('errfn3').style.color = "#ff0000";
           document.getElementById('errfn3').innerHTML=" ** confirm password and password field do not match";
        }else{
document.getElementById('errfn3').innerHTML=" ";
}
      
}
}
function validateCity() {
if (document.getElementById("users_city").value == "") {
          document.getElementById('errfn4').style.color = "#ff0000";
    document.getElementById('errfn4').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn4').innerHTML = " ";
}
}

function validateState() {

if (document.getElementById("users_state").value == "") {
          document.getElementById('errfn5').style.color = "#ff0000";
    document.getElementById('errfn5').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn5').innerHTML = " ";
}
}

function validateCountry() {
if (document.getElementById("users_country").value == "") {
          document.getElementById('errfn6').style.color = "#ff0000";
    document.getElementById('errfn6').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn6').innerHTML = " ";
}
}

function validateAddress() {
if (document.getElementById("users_address").value == "") {
          document.getElementById('errfn7').style.color = "#ff0000";
    document.getElementById('errfn7').innerHTML="  ** Field Cannot be black";
        }else{
document.getElementById('errfn7').innerHTML = " ";
}
}

function validateEmail() {
if (document.getElementById("users_email").value == "") {
          document.getElementById('errfn8').style.color = "#ff0000";
    document.getElementById('errfn8').innerHTML="  ** Field Cannot be black";
        }else{
    var g = document.getElementById("users_email").value;
    var atpos = g.indexOf("@");
    var dotpos = g.lastIndexOf(".");
    if (atpos.value>1 || atpos<1 || dotpos<atpos+2 || dotpos+2>=g.length) {
        document.getElementById('errfn8').style.color = "#ff0000";
document.getElementById('errfn8').innerHTML="  ** Please enter valid Email-ID";
    }
else{
document.getElementById('errfn8').innerHTML=" ";
}
 
 }   }