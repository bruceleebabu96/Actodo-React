import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer()
{
    const [ActivityArry, setActivityArry] = useState([])
    return(
        <div className="flex flex-wrap gap-2">
           <AddTodoForm ActivityArry={ActivityArry} setActivityArry={setActivityArry}></AddTodoForm>
           <TodoList ActivityArry={ActivityArry} setActivityArry={setActivityArry}></TodoList>
        </div>
    )
}

export default TodoContainer