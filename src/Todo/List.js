/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ListItem from './ListItem'
import './List.css'

export default function List(props) {
    ///removes item from list by passing index
    function removeItem(index) {
        let newObj = [...props.objects]
        newObj.splice(index, 1)
        props.setObjects(newObj)
    }

    // updates check status by  recreating list
    function checksItem(index) {
        let newObj = [...props.objects]
        newObj[index].checked = !newObj[index].checked
        props.setObjects(newObj)
    }
    // displays todo list
    return (
        <div>
            {props.objects.map(
                (element, index) => {
                    return <ListItem key={index} index={index} removeItem={removeItem} checksItem={checksItem} item={element} />
                }
            )}
        </div>
    )
}

