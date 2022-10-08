import React, { useState } from "react";

export default function Arrow(){
    const [count,setCount] = useState(0)
    const [counti,setCounti] = useState(0)

    const HandleClick = ()=>{
        setCount(count+1)
    }
    const HandleClicki = ()=>{
        setCounti(counti-1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={HandleClick}>ADD</button>
            <h1>{counti}</h1>
            <button onClick={HandleClicki}>Subtract</button>
        </div>
    )
}

// hook use state, useffect,usecontext, UseReducer, useMemo, useCallback

//useState
//initial state
