/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import ToDoList from "./ToDoList";

    function ToDoitem(props){
        

    const [tasks,settasks]=useState([props.taskitem]);
           
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

    return(
        <div >
            <h1>Your Task will be displayed below</h1>
            {props.adder && <div>
            <ol id="delitem">
            <li  className=" text-violet-900">{props.counter}-{props.taskitem.toUpperCase()} </li>
            <div className="flex justify-evenly m-24">
            <button type="button" className=" bg-green-500 rounded-full hover:scale-125 font-normal" >ADD Task</button>
            <button type="button" className=" bg-blue-500 rounded-full hover:scale-125 w-14" onClick={handleEdit} >Edit</button>
            <button type="button" className=" bg-red-600 w-14 rounded-full  hover:scale-125" onClick={handledelete}>Delete</button>
                 </div>
            </ol>
            </div>
            }
            
            
        <ToDoList list={tasks}/>   
         
       </div>
    
    )
}

export default ToDoitem;