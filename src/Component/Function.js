import React from "react";

export default function Function(){
    
    let a;
    let b;
    function sum(a,b){
        let c;
        return (c = a+b);
        const student = "priyu";
        console.log(student + "inside function")
    }
    let name="abc";
    
    return(
        <>
            <h1 style={ { color: "red"}} >{name}</h1>
            <div style={ { fontSize: "30px"}} >{ sum(10,20)}</div>
        </>
    )
}


//using curly brashes for js in html

//for variable
//let
//var--not block scope, reassign, functional scope, redeclare, global
//const ----can't redeclare, can't reassign, functional scope, 

