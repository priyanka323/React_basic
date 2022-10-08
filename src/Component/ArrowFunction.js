import React,{useState} from "react";

export default function ArrowFunction(){

    // const HandleArrow=()=>{
    //     console.log('priyuu')
    // }
    // HandleArrow()

    const [email,setEmail] = useState('initial email')

   

    const HandleName=(name,value)=>{
        // console.log(name, 'value='+value);
        if(name === 'nam'){
            console.log('nam');
        }else if(name === 'email'){
            setEmail(value)
            //console.log('email');

        }else if(name === 'clgname'){
            console.log('clgname');
        }
    }

    const HandleClick = () => {
        console.log(email);
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
      <label>
        <input type="checkbox" />
        My Value
      </label>
    </div>
            <div>
                <button onClick={HandleClick}>Submit</button>
            </div>
        </div>
    )
}



//name, age, gender==check box





// const App = () => {
//     const [checked, setChecked] = React.useState(false);
  
//     const handleChange = () => {
//       setChecked(!checked);
//     };
  
//     return (
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={checked}
//             onChange={handleChange}
//           />
//           My Value
//         </label>
  
//         <p>Is "My Value" checked? {checked.toString()}</p>
//       </div>
//     );
//   };


//........................................................................

// import * as React from 'react';

// const App = () => {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

//   return (
//     <div>
//       <Checkbox
//         label="My Value"
//         value={checked}
//         onChange={handleChange}
//       />

//       <p>Is "My Value" checked? {checked.toString()}</p>
//     </div>
//   );
// };

// const Checkbox = ({ label, value, onChange }) => {
//   return (
//     <label>
//       <input type="checkbox" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };

// export default App;