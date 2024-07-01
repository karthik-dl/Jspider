let email=document.getElementById('email');
let password=document.getElementById('password');
let btn=document.getElementById('btn')
let image=document.getElementById('image')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (email.value =="karthi@gmail.com" && password.value == 1234) {
        alert('login successful');
    } else {
        // alert('login failed');
        image.src="https://media0.giphy.com/media/ac7MA7r5IMYda/giphy.gif"
    }
})
