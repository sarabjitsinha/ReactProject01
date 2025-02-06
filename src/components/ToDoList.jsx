/* eslint-disable react/prop-types */

import { useState } from "react";
import "./todolist.css"

function ToDoList(props){

    const [todotasks,settodotasks]=useState(props.list)

    function handlechange(e){
        console.log(e);
        let st=e.target.parentElement
        let mt=st.innerText;
       let val=mt.split("")
        for (let item of todotasks){
            if(item.id==val[0]){
                item.status="Completed"
            }
        }
        settodotasks(todotasks)
        console.log(todotasks)
        
    }

    
    return(
        <div className=" justify-self-center">
            <h1>Todolist</h1>
            
                  {todotasks.map((task,index)=>{
                    
                return(
                            
                            <div key={index}>
                               <li  className=" flex">{task.id} {task.tasker} {task.status} 
                                <label htmlFor="completed" className=" self-end">Mark as complete</label>
                                <input type="checkbox" name="" id="completed" onChange={(e)=>handlechange(e)} />
                                
                                </li>
                        </div>
                            
                    
                )
            })}
            
        </div>

    )
}


export default ToDoList;