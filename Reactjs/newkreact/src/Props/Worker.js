import React from "react";
import Workerp from "./Workerp";
import workers from "./Workerdeatils"

export default function Worker() {

    // ! I will another file and put it there this json format code
    // let workers = [
    //     {
    //         name:"John",
    //         age:23,
    //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTCtx2w5KuPMeLNATOcy058HV24Al5jMs4Q&usqp=CAU"
    //     },
    //     {
    //         name:"Diana",
    //         age:22,
    //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH18xa1oX5HwoseY-xYGEHRL25UDMsKYp7A&usqp=CAU"
    //     },
    //     {
    //         name:"Krishna",
    //         age:"1000",
    //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyFcJ9THZQGkiVgIC0VZ2jlnzVhThG-OwFA&usqp=CAU"
    //     },
    //     {
    //         name:"pappy",
    //         age:6,
    //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU"

    //     },
    //     {
    //         name:"butterfly",
    //         age:"2",
    //         imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIkeiwbu6hn5zP31DgzDZ0VnJhRf6jYyC8A&usqp=CAU"
    //     }

    // ]

    let inputAttributes =
    {
        type: "password",
        minlength: 6,
        required: true,
        placeholder: "Password"
    }


    return (
        <div>

            {/* //! Props */}
            {/* <Workerp name="John" age="23" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTCtx2w5KuPMeLNATOcy058HV24Al5jMs4Q&usqp=CAU">
                <h1>Best Worker</h1></Workerp>
            <Workerp name="Diana" age="22" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH18xa1oX5HwoseY-xYGEHRL25UDMsKYp7A&usqp=CAU"/>
            <Workerp name="Krishna" age="1000" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyFcJ9THZQGkiVgIC0VZ2jlnzVhThG-OwFA&usqp=CAU"/>
            <Workerp name="pappy" age="6" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&usqp=CAU"/>
            <Workerp name="dropper" age="2" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIkeiwbu6hn5zP31DgzDZ0VnJhRf6jYyC8A&usqp=CAU"/>
            <Workerp/> */}
            {/* .................................................................................... */}

            {/* {workers.map((worker)=>{
             return <Workerp name={worker.name} age={worker.age} imgUrl={worker.imgUrl}/>
            })} */}

            {/* //!Destructuring */}
            {/* {workers.map(({name,age,imgUrl})=>{
                return <Workerp name={name} age={age} imgUrl={imgUrl}/>
            })} */}
            {/* ...................................................................................... */}

            <input type="text" minlength={4} required placeholder="Username" />
            <hr />
            <input {...inputAttributes} />
            {workers.map((worker) => {
                return <Workerp {...worker} />
            })}


        </div>
    )
}