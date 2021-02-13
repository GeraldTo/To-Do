/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import TodoItem from './TodoItem'
import './List.css'

export default function List(props) {
    const [list, setList] = useState([])
    const [remove, setRemove] = useState(-1)
    // whenever an item index is marked to be deleted, remove by copying data to new list except the one to be removed and saving
    useEffect(() => {
        // only removes valid index items
        if(remove>-1){
            let newObjects = []
            //finds everything that isn't marked to be delted
            for(let i = 0; i<props.objects.length;i++){
                i!==remove && newObjects.push(props.objects[i])
            }
            props.setObjects(newObjects)
            setRemove(-1)
        }
    }, [remove])
    //whenever todo list is updated recreate todo list items by looping list and creating object
    useEffect(() => {
        let items = []
        for(let i = 0; i<props.objects.length;i++){
            items.push(<TodoItem key={i} objects={props.objects} setObjects={props.setObjects} index={i} setRemove={setRemove}/>)
        }
        setList(items) 
    }, [props.objects])
    // displays todo list
    return (
        <div>
            {list}
        </div>
    )
}

