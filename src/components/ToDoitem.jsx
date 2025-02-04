/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import ToDoList from "./ToDoList";

    function ToDoitem(props){
     
    const [count,setcount]=useState(1)   
    const [tasks,settasks]=useState([props.taskitem]);
    const [tasking,settaskitem]=useState([
        {},
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

    function handleadding(taskitem){
        setcount(count=>count+1); 
        let obj={id:count,
                tasker:taskitem
        }
        settaskitem([...tasking,obj])   

    }


    return(
        <div >
            <h1>Your Task will be displayed below</h1>
            {props.adder &&
             <div>
            <ol id="delitem">
            <li  className=" text-violet-900">{props.taskitem.toUpperCase()} </li>
            <div className="flex justify-evenly m-24">
            <button type="button" className=" bg-green-500 rounded-full hover:scale-125 font-normal "  onClick={()=>handleadding(props.taskitem)}>ADD Task</button>
            <button type="button" className=" bg-blue-500 rounded-full hover:scale-125 w-14" onClick={handleEdit} >Edit</button>
            <button type="button" className=" bg-red-600 w-14 rounded-full  hover:scale-125" onClick={handledelete}>Delete</button>
              </div>
            </ol>
                </div>
            }
            
            
        <ToDoList list={tasks}/>   
         {tasking.map((item,index)=>{
            return(
               <li key={index}>
                {item.tasker}
               </li>
            )
         })}
         
          
       </div>
    
    )
}

export default ToDoitem;