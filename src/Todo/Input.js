import React from 'react'
import './Input.css';

export default function Input(props) {
    // uses inputs to grab tasks witha date that will be added to the list 
    return (
        <div className="Input">
            <input autoFocus className="Tasks" placeholder="Enter Task" value={props.desc} onChange={e =>props.setDesc(e.target.value)} /> 
            <input className="Date" type="date" value={props.date} onChange={e =>props.setDate(e.target.value)}/> 
            <button className="InputButton">Add to List</button>
        </div>
    )
}
