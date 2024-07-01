let time = document.getElementsByClassName('time')
setInterval(()=>{
    time[0].textContent=new Date().getHours()
    time[1].textContent=new Date().getMinutes()
    time[2].textContent=new Date().getSeconds()

},1000)