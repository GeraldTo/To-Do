/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './Calendar.css'
import CalendarDay from './CalendarDay'


export default function Calendar(props) {
    // initializes calendar by creating a list of 7 CalendarDay
    let initDays = []
    for (let i = 0; i < 7; i++) {
        initDays.push(<CalendarDay key={i} index={i} objects={props.objects} />)
    }
    return (
        <div className="Calendar">
            <h2>Tasks For The Next Week</h2>
            {[...Array(7)].map((_, index) => { return <CalendarDay key={index} index={index} objects={props.objects} /> })}
        </div>
    )
}