import React from 'react'
import PropTypes from 'prop-types'
import { ContextMenuTrigger } from "react-contextmenu";


const MENU_ID = "EVENT";

function collect(props) {
    return { event: props.event };
}

export const Event = (props) =>{

    const {event, eventsInRow, openEventModal} = props
    const eventStyle = {
        width: (100/eventsInRow)+"%",
        textAlign: eventsInRow==1?"center":"left"
    }
    const nameStyle = {
        textAlign: eventsInRow==1?"center":"left"
    }

    const isBreak = event.isBreak;
    const breakClass = event.isBreak?"break":"";

    let people =(<div></div>);
    if(!isBreak){
        people =
            ( <div className="people">
                {event.people.map(person =>
                    <div className="person">
                        {person.name}
                    </div>
                )}
            </div>)
    }

    return(
        <ContextMenuTrigger renderTag='div' event={event}  id={MENU_ID} holdToDisplay={1000} collect={collect} >
            <div className="event" style={eventStyle} onClick={(e) => openEventModal(e, event)}>
                <div className={breakClass}>
                    <div className="room">{event.room}</div>
                    <div className="body">
                        <div style={nameStyle} className="name">{event.name}</div>
                        {people}
                    </div>
                </div>
            </div>
        </ContextMenuTrigger>
    )
}

Event.propTypes = {
    event     : PropTypes.object.isRequired,
    eventsInRow: PropTypes.array.isRequired
}

export default Event
