let fetchdata=async() =>{
    let URL='https://jsonplaceholder.typicode.com/users'  //send requests to servers/APT's
    let response = await fetch(URL)
    // console.log(response)
    let data= await response.json()
    // console.log(data[0].name)
    // map method
    data.map((x)=>{
        console.log(x.name)
    })
}
fetchdata()
