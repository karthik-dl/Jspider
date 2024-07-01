let btn=document.getElementById('btn')   //button
// let email=document.getElementById('email')   //input
let age=document.getElementById('age')
let title=document.getElementById('title')  //h1

btn.addEventListener('click',(e)=>{
    e.preventDefault()     //prevents the page from reloading
    // console.log(email.value)
    // alert(email.value)   //it shows the alert message
    // title.textContent = email.value
    // title.style.color= email.value
    // title.style.backgroundColor= email.value
    // document.body.style.backgroundColor= email.value    //it will add the background color
    let YOB=age.value
    let currentAge=new Date().getFullYear()-YOB
    title.textContent = currentAge
})