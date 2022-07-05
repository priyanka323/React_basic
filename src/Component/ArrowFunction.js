import React from "react";

export default function ArrowFunction(){

    // const HandleArrow=()=>{
    //     console.log('priyuu')
    // }
    // HandleArrow()

    const HandleName=(name,value)=>{
        // console.log(name, 'value='+value);
        if(name == 'nam'){
            console.log('nam');
        }else if(name == 'email'){
            console.log('email');

        }else if(name == 'clgname'){
            console.log('clgname');
        }
    }

    const HandleClick = () => {
        console.log('click');
    }

    return (
        <div className="form">
            <div>
            <span>enter your name</span>
            <input type='text' name='nam' onChange={(e)=>HandleName(e.target.name, e.target.value)}></input>
            </div>
            <div>
            <span>email</span>
            <input type='text' name='email' onChange={(e)=>HandleName(e.target.name, e.target.value)} ></input>
            </div>
            <div>
            <span>college name</span>
            <input type='text' name='clgname' onChange={(e)=>HandleName(e.target.name, e.target.value)}></input>
            </div>
            
            <div>
                <button onClick={HandleClick}>Submit</button>
            </div>
        </div>
    )
}



//name, age, gender==check box