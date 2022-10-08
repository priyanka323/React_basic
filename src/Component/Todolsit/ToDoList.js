import React, { useState } from "react";

import {MdDeleteOutline} from 'react-icons'

import './ToDoList.css'

export default function ToDoList(){

    const [newInput, setNewInput]=useState()
    const [DisplayData, setDisplayData] =useState([])

    const HandleChange=(e)=>{
        let newValue = e.target.value;
        setNewInput(newValue)
        console.log(newValue);
    }

    

    displayData.map((item,key)=>(console.log("at index=" +key + "" + item)))

    const HandleAdd=()=>{
        setDisplayData((prevState)=>{
            return[...prevState,newInput]
        })
        console.log(displayData)
    }

    return(
        <>
        <div className="container">
            <div className="Header">
            <input type='text' onChange={HandleChange}></input>
            <button onClick={HandleAdd}>ADD</button>
            </div>
            <div className="DisplayData">
                {displayData.map((item,index)=> (
                    <div className="displaydesign" key={index} >{}item</div>
                    <MdDeleteOutline/>
                ))}
                </div>
        </div>
        </>
    )
}