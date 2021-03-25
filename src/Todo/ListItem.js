import React from 'react'

export default function TodoItem(props) {
    // displays todo list items with date and a button to delete and check
    // deletes by saving index to remove for the parent list and remove object
    return (
        <div className="Item">
            <input type="checkbox" checked={props.item.checked} onClick={() => props.checksItem(props.index)} onChange={() => null} />
            <label className="DateItem">{!props.item.date ? <label>No Date</label> : <label>{props.item.date}</label>}</label>
            <label className="Description" style={props.item.checked ? { textDecorationLine: 'line-through', color: 'gray' } : {}}>{props.item.description}</label>
            <button className="Delete" type="button" onClick={() => props.removeItem(props.index)}>x</button>
        </div>
    )
}
