import { useState } from "react"

function AddTodoForm(probs) {

    const ActivityArry = probs.ActivityArry
    const setActivityArry = probs.setActivityArry

    const [inputArry, setinputArray] = useState("")

    const inputhandle = (evt) => {
        setinputArray(evt.target.value)
    }

    const addhandle = () => {

        setActivityArry([...ActivityArry, { id: ActivityArry.length + 1, activity: inputArry }])
        setinputArray("")

    }


    return (<div id="TodoContainer">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <input value={inputArry} onChange={inputhandle} className="border border-black p-2" type="text" placeholder="input your activity" />
        <button onClick={addhandle} className="bg-black text-white border border-black p-2" >Add</button>
    </div>)
}

export default AddTodoForm