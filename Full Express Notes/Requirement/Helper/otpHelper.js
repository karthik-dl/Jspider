// OTP creation

let sendOTP=()=>{
    return Math.round(Math.random()*(1000000-1000)+10000)
}
// console.log(sendOTP);

module.exports={
    sendOTP
}