import Child from "./Child";

let obj = {
    name: "Karthi",
    age: "22",
    course: "Mern",
    address: {
        state: "Karnataka",
        district: "Hassan"
    }
}
let items= ["Mangoo", "Apple", "Banana"]
const Parent = () => {
    return <Child userName={"Karthik"} object={obj} fruit={items} />
}
export default Parent