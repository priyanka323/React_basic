
import React from "react";

class ChildComponent extends React.Component{
    constructor(props){
        super(props)
        // this.state={}
    }
    componentWillUnmount(){
        console.log('inside umount');
    }
    

    render() {

        

        return(
            <div>
                <h2>i am a child component</h2>
            </div>
            
        )
    }
}

export default ChildComponent;

    
