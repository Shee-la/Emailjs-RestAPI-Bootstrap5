function sendMail(){
    var params= {
        
       name: document.getElementById("uname").value,
        email:document.getElementById("email").value,
       message: document.getElementById("message").value, 
};

  const serviceID = "serviceID"; //enter your service ID inside the double quotes
const templateID = "templateID"; //enter your template ID inside the double quotes

if 
(document.getElementById("uname").value=="")
{
  alert("Your name field is empty");
  return false;
 } 
else if 
(document.getElementById("email").value=="")
{
alert("Your email is empty");
return false;
}
else if 
(document.getElementById("message").value=="")
{
alert("Your message is empty");
return false;
}

else {
emailjs
.send(serviceID,templateID,params)
.then  //empty the fields
  (document.getElementById("uname").value="",
document.getElementById("email").value="",
document.getElementById("message").value="")
alert("Message sent successfully")
}
}

/* 
 const serviceID = "serviceID"; //enter your service ID inside the double quotes
const templateID = "templateID"; //enter your template ID inside the double quotes

emailjs
.send(serviceID,templateID,params)
.then 
if(document.getElementById("uname").value=="",
document.getElementById("email").value=="",
document.getElementById("message").value=="" )
 { 
  alert("some fields are empty");
 return false
}
else{
if 
(document.getElementById("uname").value=="")
{
  alert("name is empty");
  return false
 }
if 
(document.getElementById("email").value=="")
{
alert("email is empty");
return false
}
else{
  alert("Message sent successfully");
  //then empty the fields
  document.getElementById("uname").value="",
document.getElementById("email").value="",
document.getElementById("message").value=""}
}
} */
