// fetching the element
// let title = document.getElementById("title")

// updating the content
// title.textContent="new content"

// update the structure
// title.innerHTML="<a href=''>new content</a>"

// add styles
// title.style.color="blue"
// title.style.color="blue"
// title.style.background="linear-gradient(orange,white,palegreen)"
// title.style.fontSize="60px"
// title.style.backgroundColor="green"

let head=document.getElementsByClassName('head')
// for(let i=0; i<head.length; i++)
// {
//     head[i].textContent="Any content"
//     head[i].style.color="green"
//     head[i].style.fontSize="60px"
// }
// head[0].style.color="red"
// head[1].style.color="green"
// head[2].style.color="blue"
// head[3].style.color="red"
// head[4].style.color="green"
// head[5].style.color="blue"

for(let i=0; i<head.length; i++)
{   
    if(i%3==0){
        head[i].style.color="red"
        head[i+1].style.color="green"
        head[i+2].style.color="blue"
    }
    // else if(i%2==0){
    //     head[i].style.color="blue"
    // }
    // else{
    //     head[i].style.color="green"
    // }

}
