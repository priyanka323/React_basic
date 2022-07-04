// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// in src/App.js
// import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

// import { PostList } from './posts';

// const App = () => (
//     <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
//         <Resource name="posts" list={PostList} />
//     </Admin>
// );

// export default App;

// export default App;
// import React, { Component } from 'react';  
// import ReactTable from "react-table";  
// // import "react-table/react-table.css";  
  
// class App extends Component {  
//   render() {  
//      const data = [{  
//         name: 'Ayaan',  
//         age: 26  
//         },{  
//          name: 'Ahana',  
//          age: 22  
//          },{  
//          name: 'Peter',  
//          age: 40      
//          },{  
//          name: 'Virat',  
//          age: 30  
//          },{  
//          name: 'Rohit',  
//          age: 32  
//          },{  
//          name: 'Dhoni',  
//          age: 37  
//          }]  
//      const columns = [{  
//        Header: 'Name',  
//        accessor: 'name'  
//        },{  
//        Header: 'Age',  
//        accessor: 'age'  
//        }]  
//     return (  
//           <div>  
//               <ReactTable  
//                   data={data}  
//                   columns={columns}  
//                   defaultPageSize = {2}  
//                   pageSizeOptions = {[2,4, 6]}  
//               />  
//           </div>        
//     )  
//   }  
// }  
// export default App;  
import Intro from "./Component/Intro"
import Function from "./Component/Function";
import Object from "./Component/Object"
export default function App() {
  return (
    <div className="App">
      <Intro/>
      <Function/>
      <Object/>
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
