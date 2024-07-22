import { useState } from "react"
import Todoitem from "./Todoitem"

function TodoList(probs) {
    const ActivityArry = probs.ActivityArry
    const setActivityArry = probs.setActivityArry


return (<div id="TodoList" className="bg-[#BDB4EA] flex-grow p-2 rounded-md">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
       {ActivityArry.length === 0 ?<p>you haven't add anything</p>:""}
       {
            ActivityArry.map(function (item, index) {
                return <Todoitem item={item} index={index} ActivityArry={ActivityArry} setActivityArry={setActivityArry}></Todoitem>
            })
        }
    </div>)
}

export default TodoList