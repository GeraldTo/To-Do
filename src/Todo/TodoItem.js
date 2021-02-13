import React from 'react'

export default function TodoItem(props) {  
    const obj = props.objects[props.index] 
    // recreates todo list and updates check status by copying data to new list and saving
    function handleChecked() {
        let newObj = [...props.objects]
        newObj[props.index].checked = !newObj[props.index].checked
        props.setObjects(newObj)
    }
    // displays todo list items with date and a button to delete and check
    // deletes by saving index to remove for the parent list and remove object
    return (
        <div className="Item">
            <input  type="checkbox" checked={obj.checked} onClick={handleChecked} onChange={()=> null}/> 
            <label className="DateItem">{!obj.date ? <label>No Date</label>: <label>{obj.date}</label>}</label>
            <label className="Description" style={obj.checked ? { textDecorationLine: 'line-through', color:'gray' }: {}}>{obj.description}</label> 
            <button className="Delete" type="button" onClick={()=>props.setRemove(props.index)}>x</button>
        </div>
    )
}
