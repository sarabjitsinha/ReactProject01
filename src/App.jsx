/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import ToDoitem from "./components/ToDoitem";
import Footer from "./components/Footer";

  function App(){
    const [task,settask]=useState('');
    
    const [flag,setflag]=useState(false)

  function handleChange(e){
      setflag((flag)=>flag=false)
      const val=e.target.value;
      settask(val.toUpperCase())
    }

  
  function handleadd(){
      setflag((flag)=>flag=true)
      document.getElementById("task").setAttribute("disabled","disabled")  
  }

  
  
  return(
    
      <div className="tododiv">
      <Header/>
      <div className="mt-10">
         <input type="text" name="task" id="task" placeholder="Enter The task" className="bg-white w-96" onChange={handleChange}/>
         <button type="button" className="bg-fuchsia-500 w-24 rounded-4xl" onClick={handleadd}>Add </button>
       </div>
      
        <ToDoitem taskitem={task} adder={flag} />    
             
      <Footer/> 
    </div>
  )

}

export default App;