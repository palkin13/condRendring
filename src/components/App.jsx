import React from "react";
 import Login from "./Login";



var loggedin = false;


// function renderConditionally(){
// if ( loggedin === true){
//   return <h1>Hello</h1>
// }
// else{
//   return (
//     <Login />
// ); 
// }
// }

function App() {
  return <div className="container"> {
  loggedin  ? <h1>Hello</h1> : <Login />


 } </div>;
}

export default App;
