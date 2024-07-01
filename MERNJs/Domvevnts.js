let title=document.getElementById("title");
let btn=document.getElementsById("btn")

// updating h1 directly
// title.textContent="hi"

// btn.addEventListener("click", () =>{     //we can use click ,doubleclick(dblclick),hover(mouseover),mouseup,mousedown
//     // updateing h1 after clicking
//     // title.textContent="hi" 
//     if(title.textContent == "Hello")
//     {
//         title.textContent = "Hi"
//     }
//     else
//     {
//         title.textContent = "Hello"
//     }

//  })
btn.addEventListener("click", ()=>{
    title.textContent++
})

// btn[0].addEventListener("click", ()=>{
    
//     title.textContent++
//     title.style.color="red"
// })
// btn[1].addEventListener("click", ()=>{
    
//     if(title.textContent>0){
//      title.textContent--
//     }
//     title.style.color="green"
// })
// btn[2].addEventListener("click", ()=>{
//     title.textContent=0
//     title.style.color="blue"
// })
