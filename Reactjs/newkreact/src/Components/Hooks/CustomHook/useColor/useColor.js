import React ,{useState} from 'react'

const useColor = () => {
    let [color, setColor] = useState("")
    let [previous,setPrevious] =useState("")

    let changeColor = () => {
        setColor(
            document.body.style.backgroundColor = "SkyBlue",  //change color to blue when button clicked
            document.body.style.fontSize = "40px"
        );
    }

    let ChangePre=()=>{
        setPrevious(
            document.body.style.backgroundColor = "wheat",
            document.body.style.fontSize = "20px"
        )
    }
  return {changeColor,ChangePre}
}

export {useColor} 