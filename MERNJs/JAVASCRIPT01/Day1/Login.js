let form=document.querySelector('form');
console.log(form);
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let lname=document.getElementById("Lname").value;
    let password=document.getElementById("lpwd").value;
    console.log(lname,password);
    let userName=localStorage.getItem("userName");
    let lpassword=localStorage.getItem("password")
    console.log(userName,lpassword);
    if(lname == userName && lpassword == password){
        alert("Login Succesfully")
        window.open("./Home.html")
    }
    else{
        alert("Login Failed")
    }
})