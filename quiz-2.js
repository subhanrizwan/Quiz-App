
// var btn = document.getElementById('creatbtn')
function final_login(){
    event.preventDefault();
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var email1 = localStorage.getItem("email")
    var pass1 = localStorage.getItem("pass")
    if(email1 === email && password === pass1){

        window.location = "cousres.html"
    }else{alert("please enter the email,phone,name" )}


}

function creat_acc(){
    // event.preventDefault();
    var lgn = document.getElementById('crt_acc');
    lgn.style.display='block'
    var crt = document.getElementById('creat')
    crt.style.display='none'


    
// window.location ="creatacc.html"
    // btn.remove
}
function login(){

    event.preventDefault();
  
    var full_firstname= document.getElementById('first_reg').value
    var full_lastname = document.getElementById('last_reg').value
    var full_email = document.getElementById('email_reg').value
    var full_pass = document.getElementById('pass_reg').value
    
    localStorage.setItem('firstname'  , full_firstname)
    localStorage.setItem('lastname' , full_lastname )
    localStorage.setItem('email'  , full_email)
    localStorage.setItem('pass' , full_pass)
    
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(full_email)
    var pass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(full_pass)
   
    if( email){
     if(pass){
     }
      window.location = 'quiz-login.html' 
    }else{alert("email is required")}
  }
  

 

 


