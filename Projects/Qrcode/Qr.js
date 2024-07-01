// let imgBox = document.getElementById('imgBox');
// let qrImage = document.getElementById('qrImage');
// let qrText = document.getElementById('qrText');

// function generateQR(){
//     qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
//     imgBox.classList.add("show-img");
//     if(show-img){


//     }

// }


// !Spread operator
const numbers = [1, 2, 3, 4, 5, 6]

console.log(...numbers)

// !Rest operator
const [a, b, ...rest] = numbers

console.log(a, "AA")
console.log(b, "BB")
console.log(rest,"REST")