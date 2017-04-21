import * as Types from '../constants/ActionTypes'

export function changeTheme (e) {
    const color = e.target.value
    return {
        type    : Types.CHANGE_THEME,
        color : color
    }
}

export function closeModal () {
    return {
        type    : Types.CLOSE_MODAL
    }
}

export function openEventModal (e, event) {
    return {
        type    : Types.OPEN_EVENT_MODAL,
        event : event
    }
}


export function changeDay (e) {
    const day = e.target.value
    return {
        type    : Types.CHANGE_DAY,
        day : day
    }
}

export function addEvent () {
    //todo: Add event
}

export function removeEvent (e, data) {
    return {
        type    : Types.REMOVE_EVENT,
        event : data
    }
}

export function addTimeInterval () {
    //todo: Remove event
}

export function removeTimeInterval () {
    //todo: Remove event
}