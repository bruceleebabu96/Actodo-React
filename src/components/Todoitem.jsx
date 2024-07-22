

function Todoitem(probs) {
    const ActivityArry = probs.ActivityArry
    const setActivityArry = probs.setActivityArry

    const handleDelete = (itemid) => {
        var tempArray = ActivityArry.filter(function (item) {

            if (itemid === item.id) {
                return false
            }
            else {
                return true
            }
        })

        setActivityArry(tempArray)

    }
    return (<div className="flex justify-between">
    <p>{probs.index + 1}. {probs.item.activity}</p>
    <button className="text-red-500" onClick={() => { handleDelete(probs.item.id) }}>Delete</button>
    </div>)
}


export default Todoitem