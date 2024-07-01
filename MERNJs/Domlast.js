
let MSD=()=>{
    return 'Definatly not...!'
}
let VK=()=>{
    // setTimeout(()=>{
    //     return 'Ee sala cump namde'
    // },2000)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Ee sala cump namde')
        },2000);
    })
}
let ABD=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Mr.360')
        }, 3000);
    })
}
let result=async()=>{
    console.log(MSD())
    console.log(await VK())
    console.log(await ABD())
}
result()
