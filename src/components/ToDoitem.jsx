 
/* eslint-disable react/prop-types */

import { useState } from "react";
import ToDoList from "./ToDoList";

    function ToDoitem(props){
    
    const[flag,setflag]=useState(false)
    const [count,setcount]=useState(1)   
    const [tasks,settasks]=useState(props.taskitem);
    const [tasking,settaskitem]=useState([
        
    ])

    function handleEdit(){
        document.getElementById('task').style.cursor='pointer'
        document.getElementById('task').removeAttribute("disabled")
    }

    function handledelete(){
        document.getElementById('task').value=""
        const liEl=document.getElementById('delitem');
        liEl.remove()
        document.getElementById('task').style.cursor="default"
        document.getElementById('task').removeAttribute("disabled")
    }

    function handleadding(tasks){
        setcount(count=>count+1); 
        let obj={id:count,
                tasker:tasks,
                status:"Pending"
        }
        settaskitem([...tasking,obj]);
        document.getElementById('task').value=""
        document.getElementById('task').removeAttribute("disabled")
        setflag(false)
        settasks(null) 
           
    }


    return(
        <div >
            <h1>Your Task will be displayed below</h1>
            {props.adder &&
             <div>
            <ol id="delitem" className=" m-10">
            <li  className=" text-violet-900">{props.taskitem.toUpperCase()} </li>
            <div className="flex justify-evenly ">
            <button type="button" className=" bg-green-500 rounded-full hover:scale-125 font-normal " onClick={()=>handleadding(tasks)}>Add/update Task</button>
            <button type="button" className=" bg-blue-500 rounded-full hover:scale-125 w-14" onClick={handleEdit} >Edit</button>
            <button type="button" className=" bg-red-600 w-14 rounded-full  hover:scale-125" onClick={handledelete}>Delete</button>
              </div>
            </ol>
                </div>
            }
            
           <button type="button" onClick={()=>setflag(true)} className=" bg-purple-800 rounded-full">Display Tasks</button> 
        

          {flag && <ToDoList  list={tasking}/>}
            

          
       </div>
    
    )
}

export default ToDoitem;