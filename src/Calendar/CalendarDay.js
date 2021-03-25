/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

export default function CalendarDay(props) {
    var today = new Date()
    var currentDay = new Date()
    // finds current day of the week
    currentDay.setDate(currentDay.getDate() + props.index);
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // creates list of tasks whenever todo list is updated by looping todo list and adding to todays tasks
    const [todaysTasks, setTasks] = useState([])
    useEffect(() => {
        let newTasks = []
        // loops all tasks to find unchecked items in the current day
        for (let i = 0; i < props.objects.length; i++) {
            const current = props.objects[i]
            if (!current.checked) {
                // compares todo list item's year, month, and day with current day's year, month, and day 
                if (String(currentDay.getFullYear()) === current.date.substring(0, 4)
                    && ('0' + (currentDay.getMonth() + 1)).slice(-2) === current.date.substring(5, 7)
                    && ('0' + currentDay.getDate()).slice(-2) === current.date.substring(8, 10)) {
                    newTasks.push(<div key={i} className="DailyTaskItem">{current.description}</div>)
                }
            }
        }
        setTasks(newTasks)
    }, [props.objects])
    return (
        <div className="Days" >
            {/* gets current day of the week */}
            <h3>{currentDay.getDay() === today.getDay() ? "Today"
                : currentDay.getDay() === today.getDay() + 1 ? "Tomorrow"
                    : week[currentDay.getDay()]}</h3>
            {/* Displays date */}
            <label className="Date">{currentDay.getFullYear() + '-' + ('0' + (currentDay.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDay.getDate()).slice(-2)}<br /></label>
            <div className="DailyTasks">{todaysTasks}</div>

        </div>
    )
}
