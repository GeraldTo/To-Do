/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './Calendar.css'
import CalendarDay from './CalendarDay'


export default function Calendar(props) {
    // initializes calendar by creating a list of 7 CalendarDay
    function days() {
        let initDays = []
        for (let i = 0; i < 7; i++) {
            initDays.push(<CalendarDay key={i} index={i} objects={props.objects} />)  
        }
        return initDays
    }
    return (
        <div className="Calendar">
            <h2>Tasks For The Next Week</h2>
            {days()}
        </div>
    )
}