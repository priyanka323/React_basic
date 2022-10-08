 
import Intro from "./Component/Intro"
import Function from "./Component/Function";
import Object from "./Component/Object"
import ArrowFunction from "./Component/ArrowFunction";
import CheckBox from "./Component/CheckBox";
import Arrow from "./Component/Arrow";
import React from "react";
// export default function App() {
//   return (
//     <div className="App">
//       <Intro/>
//       <Function/>
//       <Object/>
//       <ArrowFunction/>
//       <CheckBox/>
//       <Arrow/>
      
//     </div>
//   );
// }
import ClassCount from "./Component/ClassCount";
import ClassForm from "./Component/ClassForm"
import Calculator from "./Component/Calculator";
import LifeCycle from "./Component/LifeCycle";
import ChildComponent from "./ChildComponent";
import ToDoList from "./Component/Todolsit/ToDoList";

class App extends React.Component{
  render(){
    return(
      <>
      <h1>hey i'm here</h1>
      <ClassCount/>
      <ClassForm/>
      <Calculator/>
      <LifeCycle/>
      <ToDoList/>
      </>
    )
  }
}

export default App;