import React, {useState} from "react";
import Button from "./Button";

export default function Calculator() {
    const [count,setCount] = useState(0);
    const HandleClick = () => {
        console.log("count")
        console.log("click add")
        setCount(count+1);
    };
    const HandleSub = () => {
        console.log("click sub")
        setCount(count-1);
    };

    return(
        <div>
            <h1>{count}</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button sytle={{background: "red"}} onClick={HandleClick}>
                    ADD
                </button>
                <button sytle={{background: "red"}} onClick={HandleSub}>
                    SUB
                </button>
            </div>
        </div>

    )
}