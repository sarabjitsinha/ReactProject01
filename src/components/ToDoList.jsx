/* eslint-disable react/prop-types */

import { useState } from "react";
import "./todolist.css"

function ToDoList(props){

    const [todotasks,settodotasks]=useState(props.list)
    const  [updatflag,setupdateflag]=useState(false)
    function handlechange(e){
        console.log(e);
        e.target.setAttribute('disabled','disabled')
        let st=e.target.parentElement.parentElement
        let mt=st.innerText;
       let val=mt.split("")
        for (let item of todotasks){
            if(item.id==val[0]){
                item.status="Completed"
            }
        }
        settodotasks(todotasks)
               
    }

    function handleupdate(){
        
        setupdateflag(true)
    }
    
    return(
        <div className=" justify-self-center">
            
            <h1>Todolist</h1>

                  {(props.flag || updatflag)  && todotasks.map((task,index)=>{
                    
                return(
                            
                            <div key={index}>
                                
                               <li className=" flex justify-evenly">{task.id} {task.tasker} {task.status} 
                                 {task.status=="Pending" &&
                                 <span>
                                 <input type="checkbox" name="" id="completed" onChange={(e)=>handlechange(e)} />
                                 <label htmlFor="completed" className=" self-end" >Mark as complete</label>
                                 </span>   
                                }
                                {task.status=="Pending" &&
                                <span>
                                <button type="button" className=" bg-emerald-400" onClick={handleupdate}>Update</button>
                                </span> 
                                }
                                </li>
                                
                        </div>
                    
                )
            })}
            
        </div>

    )
}


export default ToDoList;