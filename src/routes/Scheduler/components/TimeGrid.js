import React from 'react'
import IntervalRow from './IntervalRow'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const MENU_ID = "EVENT";

const selectDay = (props) =>{
    const {selectedDay, days} = props;
    return days[selectedDay]
}

export const TimeGrid = (props) =>{
    const selectedDay = selectDay(props)
    const {timeIntervals, theme, day} = selectedDay

    return(
        <div className={theme}>
            <div className="day-title">
                {day}
            </div>
            <div className="grid">
                {timeIntervals.map(interval =>
                    <IntervalRow interval={interval} {...props} />
                )}
            </div>
            <ContextMenu id={MENU_ID}>
                <MenuItem onClick={props.actions.removeEvent} data={{ event: {} }}>Borrar</MenuItem>
            </ContextMenu>
        </div>
    )
}

export default TimeGrid
