let form=document.querySelector("form");
console.log(form);
form.addEventListener("submit",e=>{
    e.preventDefault();
    let user=document.getElementById("uName").value
    let email=document.getElementById("email").value
    let tel=document.getElementById("tel").value
    let pwd=document.getElementById("pwd").value
    console.log(user,email,tel,pwd);
    if(user == "" && email == "" ){
        alert("Please provide your credentials")
    }
    else if(tel == ""){
        alert("PLease enter your mobile number")
    }
    else{
        localStorage.setItem("userName",email)
        localStorage.setItem("password",pwd)
        alert("Registration Successfully")
        window.open("./Login.html")
    }
})