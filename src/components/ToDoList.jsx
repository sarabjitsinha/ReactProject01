/* eslint-disable react/prop-types */


function ToDoList(props){


    
    return(
        <div>
            <h1>todolist</h1>
            <ol type="none">{props.list.map((task,index)=>{
                return(
                            
                        <li key={index}>{task}</li>
                    
                )
            })}</ol>
        </div>

    )
}


export default ToDoList;