import React from "react";
import ChildComponent from "../ChildComponent";

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={ checked: false}
    }
    componentDidMount(){
        console.log('inside comnent did mount');
    }
    componentDidUpdate(){
        console.log('inside component did update');
        // this.setState({checked})
    }

    render() {

        const HandleClick =()=>{
            this.setState({ checked: !this.state.checked})
        }

        return(
            <div>
                <h1>life cycl of react </h1>

                <ul>
                    <li>Mount- component mount</li>
                    <li>Update- component update</li>
                    <li>UnMount- component Unmount</li>
                    <li>error handling</li>
                </ul>
                {/* <buton onclick={HandleClick} >Click me to update</buton> */}
                <button onclick={HandleClick} >Click me to update</button>

                {this.state.checked? <ChildComponent/> : ''}

            </div>
        )
    }
}
export default LifeCycle;

    
