import React from 'react'
import Event from './Event'

export const IntervalRow = (props) =>{
    const {interval, actions} = props
    return(
        <div className="grid-row">
            <div className="interval">{interval.initial} - {interval.final}</div>
            <div className="events">
                {interval.events.map(event =>
                    <Event event={event} eventsInRow={interval.events.length} {...actions}/>
                )}
            </div>
        </div>
    )
}

export default IntervalRow
