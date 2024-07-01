let email=document.getElementById('email')
let password=document.getElementById('password')
let btn=document.getElementById('btn')
let image=document.getElementById('image')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (email.value =="karthi@gmail.com" && password.value == 1234) {
        // alert('login successful');
        image.src="https://i.pinimg.com/originals/9f/75/a7/9f75a735e474d9b8c127fd5383717f44.gif"
    } else {
        // alert('login failed');
        image.src="https://media0.giphy.com/media/ac7MA7r5IMYda/giphy.gif"
        // alert('login failed');
    }
})