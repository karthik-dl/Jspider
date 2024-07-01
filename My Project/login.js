let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.getElementById('btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(email.value =="karthik2002@gmail.com" && password.value== 9845046803){
        // alert("login success")
        window.location.href="Succesfull.html";
    }
    else{
        window.location.href="Wrongpage.html";
    }

})