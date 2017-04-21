import React from 'react'
import PropTypes from 'prop-types'
import TimeGrid from './TimeGrid'
import {Modal, Button} from 'react-bootstrap'

export const Scheduler = (props) =>{
    const actions = props.actions
    const event = props.modal.event;
    let modalBody, modalHeader;
    if (event){
        modalHeader = (
            <span>{event.name} {event.initial} - {event.final}</span>
        )

        let people;
        if(event.people){
            if(event.people.length>0){
            people = (<div>
                Profesores:
                <br/>
                <ul>
                    {event.people.map(profesor=>
                        <li>{profesor.name}</li>
                    )}
                </ul>
            </div>)
            }
        }

        modalBody = (
            event.room && (
            <div>
                <div>Salón: {event.room}</div>
                {people}
            </div>
            )

        )
    }

    return(
    <div>
        <Modal show={props.modal.isVisible} onHide={actions.closeModal} >
            <Modal.Header closeButton>
                <Modal.Title>{modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={actions.closeModal}>Cerrar</Button>
            </Modal.Footer>
        </Modal>


        <select name="theme-selector" id="theme" onChange={actions.changeDay}>
            <option value="0">Domingo 30 de Octubre</option>
            <option value="1">Lunes 31 de Octubre</option>
            <option value="2">Martes 1 de Noviembre</option>
            <option value="3">Miércoles 2 de Noviembre</option>
            <option value="4">Jueves 3 de Noviembre</option>
        </select>

        <TimeGrid {...props} />
    </div>
    )
}

Scheduler.propTypes = {
    timeIntervals     : PropTypes.array.isRequired,
    theme: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    changeTheme   : PropTypes.func.isRequired,
    changeDay   : PropTypes.func.isRequired,
    modal: PropTypes.object.isRequired
}

export default Scheduler
