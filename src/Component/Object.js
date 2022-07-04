import React from "react";

export default function Object(){
    
    //object
    let address={
    pincode: '125055',
    city: 'sirsa',
    state: 'haryana',
    country: 'india',
    array: ['a,b,c,d']
    }
    console.log(address);

    
    return(
        <>
            <div style={ {background: "#F2EBE9"}} >
                <h3 style={{fontSize: "30px"}, {color: "#371B58"}}>
                    {address.array}
                </h3>
                <h3 style={{fontSize: "30px"}, {color: "#371B58"}}>
                    {address.pincode}
                </h3>
                <h3 style={{fontSize: "30px"}, {color: "#371B58"}}>
                {address.country}
                </h3>
                <h3 style={{fontSize: "30px"}, {color: "#371B58"}}>
                    {address.city}
                </h3>
                <h3 style={{fontSize: "30px"}, {color: "#371B58"}}>
                    {address.state}
                </h3>
            </div>
        </>
    )
}