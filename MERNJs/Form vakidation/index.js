const container=document.querySelector("container")
// container.style.backgroundColor="yellow"


const input1=document.createElement("input")
const input2=document.createElement("input")
const form=document.querySelector("form")

input1.id = "username"
input2.id = "password"

form.style.display="flex"
form.style.alignItems="center"
form.style.justifyContent="center"

form.appendChild(input1)
input1.style.backgroundColor="aqua"
input1.style.border="none"
input1.style.display="block"
input1.style.margin="10px"

form.appendChild(input2)
input2.style.backgroundColor="aqua"
input2.style.border="none"
input2.style.display="block"
input2.style.margin="10px"

input1.placeholder="Enter user name"
input2.placeholder="Enter your password"

const btn=document.createElement("button")
btn.innerText ="Submit"
btn.style.backgroundColor="green"
btn.style.border="none"
btn.style.margin="10px"

form.appendChild(btn)
btn.className="button"

const button = document.querySelector("button")


const uname=localStorage.getItem("username")
const upwd=localStorage.getItem("password")

button.addEventListener("click",(m)=>{
    m.preventDefault()

    const inpt1=document.getElementById("username").value
    const inpt2=document.getElementById("password").value

    localStorage.setItem("username",inpt1)
    localStorage.setItem("password",inpt2)
    localStorage.removeItem("password",inpt2)
    
})