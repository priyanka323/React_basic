import React from 'react'

class ClassCount extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
        // this.state = {countii:0}
    }

    render(){

        const HandleClick = ()=>{
            // setCount
            this.setState({count :this.state.count+1})
        }
        const HandleClickii = ()=>{
            // setCount
            this.setState({count :this.state.count-1})
        }

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={HandleClick}>ADD</button>
                <h2>{this.state.count}</h2>
                <button onClick={HandleClickii}>Subtract</button>
            </div>
        )
    }
}

export default ClassCount;



//lifecycle of react
//mounting --- component creation and insertion in app
//updating --- re-rendering  whenever change occur in state/prop
//unmounting --- removing component from DOM(frontend)
//error handling --- 