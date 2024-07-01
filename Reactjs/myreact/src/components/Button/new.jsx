import Welcome from "../greet";
// import "./new.css";

const Info=()=>{
    const display={
        color:"pink",
        fontSize:"10px",
        fontFamily:" sans-serif"


    }
    return(
        <div>
            <h1 style={display}>It will send the information to the parent file n that file display the information</h1>
            <h2 style={display}>ffjgsjfg</h2>
        <Welcome/>
    </div>
    )
}
export default Info;