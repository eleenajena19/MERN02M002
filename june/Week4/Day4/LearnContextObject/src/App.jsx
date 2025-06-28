
// import { createContext } from 'react'
import { useState} from'react'
import './App.css'
// import ChildA from './components/ChildA';

// let nameContext=createContext();
// let colorContext=createContext();



function App() {

  // use state

  let[value,setValue]=useState(0)
  // let a=0;
  function handleClick(){
    // console.log("Button clicked")
    setValue(value+1)
  }
  
// To create a context object
// step 1: To create a context object by using a method createContext()
// step 2:Give provider to the context object
// step 3: Give the value to the context object provider
// step 4:Export the context object

// how to access inside the child components
// by using useContext() hook we can get the value from the context object

// let obj= {
//   name:"xyz",
//   age:20,
//   arr:[1,2,3,4,5]
// }
// let color="red";
//   return (
//     <>
//     <nameContext.Provider value={obj}>
//       <ChildA/>
//     </nameContext.Provider>

//     <colorContext.Provider value={"red"}>
//       <ChildA/>
//     </colorContext.Provider>
//     </>
//   )
// 
return(
  <>
   <h1> Count: {value} </h1> 
   <br/>

    <button onClick={()=>setValue(value+1)}>Increment</button>

  </>
)



}
// export{nameContext}
export default App
