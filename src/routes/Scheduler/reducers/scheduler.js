import { CHANGE_THEME, CHANGE_DAY,  CLOSE_MODAL, OPEN_EVENT_MODAL, REMOVE_EVENT, REMOVE_INTERVAL } from '../constants/ActionTypes'

const initialState = {
    modal: {
        isVisible: false,
        event: {}
    },
    selectedDay: 0,
    days: [
        {
            day: "Domingo 30 de Octubre",
            theme: "blue",
            timeIntervals: [
                {
                    initial: "09:00",
                    final:"11:00",
                    events: [
                        {
                            initial: "09:00",
                            final:"11:00",
                            room:  "Salón gran cancún",
                            name: "Simposio Satélite Desayuno - Novartis",
                            people: []
                        }
                    ]
                },

                {
                    initial: "07:30",
                    final: "08:50",
                    events: [
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: [
                                {
                                    name: "Dr. Timothy Pedley",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dra. Barbara Koppel",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Gran Cancún",
                            name: "Liderazgo en Neurología Simposio AAN/AMN",
                            people: [
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 1",
                            name: "Encefalomielítis desmielinizante aguda",
                            people: [
                                {
                                    name: "Dra. Farrah Mateen",
                                    city: "Boston,USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 2",
                            name: "Actualización en Neurología",
                            people: [
                                {
                                    name: "Dr. Steven Lewis",
                                    city: "Chicago, USA"
                                }
                            ]
                        },
                    ]
                },
                {
                    initial: "11:00",
                    final:"11:30",
                    events: [
                        {
                            initial: "11:00",
                            final:"11:30",
                            isBreak: true,
                            name: "Resceso Expo Médica (Coffee break teva) (Planta baja)"
                        }
                    ]
                },
                {
                    initial: "11:30",
                    final :"13:30",
                    events: [
                        {
                            initial: "11:30",
                            final :"13:30",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: []
                        }
                    ]
                },

            ]
        },
        {
            day: "Lunes 31 de Octubre",
            theme: "pink",
            timeIntervals: [
                {
                    initial: "09:00",
                    final:"11:00",
                    events: [
                        {
                            initial: "09:00",
                            final:"11:00",
                            room:  "Salón gran cancún",
                            name: "Simposio Satélite Desayuno - Novartis",
                            people: []
                        }
                    ]
                },

                {
                    initial: "07:30",
                    final: "08:50",
                    events: [
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: [
                                {
                                    name: "Dr. Timothy Pedley",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dra. Barbara Koppel",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Gran Cancún",
                            name: "Liderazgo en Neurología Simposio AAN/AMN",
                            people: [
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 1",
                            name: "Encefalomielítis desmielinizante aguda",
                            people: [
                                {
                                    name: "Dra. Farrah Mateen",
                                    city: "Boston,USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 2",
                            name: "Actualización en Neurología",
                            people: [
                                {
                                    name: "Dr. Steven Lewis",
                                    city: "Chicago, USA"
                                }
                            ]
                        },
                    ]
                },
                {
                    initial: "11:00",
                    final:"11:30",
                    events: [
                        {
                            initial: "11:00",
                            final:"11:30",
                            isBreak: true,
                            name: "Resceso Expo Médica (Coffee break teva) (Planta baja)"
                        }
                    ]
                },
                {
                    initial: "11:30",
                    final :"13:30",
                    events: [
                        {
                            initial: "11:30",
                            final :"13:30",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: []
                        }
                    ]
                },

            ]
        },
        {
            day: "Martes 1 de Noviembre",
            theme: "green",
            timeIntervals: [
                {
                    initial: "09:00",
                    final:"11:00",
                    events: [
                        {
                            initial: "09:00",
                            final:"11:00",
                            room:  "Salón gran cancún",
                            name: "Simposio Satélite Desayuno - Novartis",
                            people: []
                        }
                    ]
                },

                {
                    initial: "07:30",
                    final: "08:50",
                    events: [
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: [
                                {
                                    name: "Dr. Timothy Pedley",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dra. Barbara Koppel",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Gran Cancún",
                            name: "Liderazgo en Neurología Simposio AAN/AMN",
                            people: [
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 1",
                            name: "Encefalomielítis desmielinizante aguda",
                            people: [
                                {
                                    name: "Dra. Farrah Mateen",
                                    city: "Boston,USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 2",
                            name: "Actualización en Neurología",
                            people: [
                                {
                                    name: "Dr. Steven Lewis",
                                    city: "Chicago, USA"
                                }
                            ]
                        },
                    ]
                },
                {
                    initial: "11:00",
                    final:"11:30",
                    events: [
                        {
                            initial: "11:00",
                            final:"11:30",
                            isBreak: true,
                            name: "Resceso Expo Médica (Coffee break teva) (Planta baja)"
                        }
                    ]
                },
                {
                    initial: "11:30",
                    final :"13:30",
                    events: [
                        {
                            initial: "11:30",
                            final :"13:30",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: []
                        }
                    ]
                },

            ]
        },
        {
            day: "Miércoles 2 de Noviembre",
            theme: "purple",
            timeIntervals: [
                {
                    initial: "09:00",
                    final:"11:00",
                    events: [
                        {
                            initial: "09:00",
                            final:"11:00",
                            room:  "Salón gran cancún",
                            name: "Simposio Satélite Desayuno - Novartis",
                            people: []
                        }
                    ]
                },

                {
                    initial: "07:30",
                    final: "08:50",
                    events: [
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: [
                                {
                                    name: "Dr. Timothy Pedley",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dra. Barbara Koppel",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Gran Cancún",
                            name: "Liderazgo en Neurología Simposio AAN/AMN",
                            people: [
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 1",
                            name: "Encefalomielítis desmielinizante aguda",
                            people: [
                                {
                                    name: "Dra. Farrah Mateen",
                                    city: "Boston,USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 2",
                            name: "Actualización en Neurología",
                            people: [
                                {
                                    name: "Dr. Steven Lewis",
                                    city: "Chicago, USA"
                                }
                            ]
                        },
                    ]
                },
                {
                    initial: "11:00",
                    final:"11:30",
                    events: [
                        {
                            initial: "11:00",
                            final:"11:30",
                            isBreak: true,
                            name: "Resceso Expo Médica (Coffee break teva) (Planta baja)"
                        }
                    ]
                },
                {
                    initial: "11:30",
                    final :"13:30",
                    events: [
                        {
                            initial: "11:30",
                            final :"13:30",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: []
                        }
                    ]
                },

            ]
        },
        {
            day: "Jueves 3 de Noviembre",
            theme: "yellow",
            timeIntervals: [
                {
                    initial: "09:00",
                    final:"11:00",
                    events: [
                        {
                            initial: "09:00",
                            final:"11:00",
                            room:  "Salón gran cancún",
                            name: "Simposio Satélite Desayuno - Novartis",
                            people: []
                        }
                    ]
                },

                {
                    initial: "07:30",
                    final: "08:50",
                    events: [
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: [
                                {
                                    name: "Dr. Timothy Pedley",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dra. Barbara Koppel",
                                    city: "New York, USA"
                                },
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Gran Cancún",
                            name: "Liderazgo en Neurología Simposio AAN/AMN",
                            people: [
                                {
                                    name: "Dr. Terrence Cascino",
                                    city: "Rochester, USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 1",
                            name: "Encefalomielítis desmielinizante aguda",
                            people: [
                                {
                                    name: "Dra. Farrah Mateen",
                                    city: "Boston,USA"
                                },
                            ]
                        },
                        {
                            initial: "07:30",
                            final: "08:50",
                            room:  "Salón Cozumel 2",
                            name: "Actualización en Neurología",
                            people: [
                                {
                                    name: "Dr. Steven Lewis",
                                    city: "Chicago, USA"
                                }
                            ]
                        },
                    ]
                },
                {
                    initial: "11:00",
                    final:"11:30",
                    events: [
                        {
                            initial: "11:00",
                            final:"11:30",
                            isBreak: true,
                            name: "Resceso Expo Médica (Coffee break teva) (Planta baja)"
                        }
                    ]
                },
                {
                    initial: "11:30",
                    final :"13:30",
                    events: [
                        {
                            initial: "11:30",
                            final :"13:30",
                            room:  "Salón Contoy",
                            name: "Reunión de la Panfs",
                            people: []
                        }
                    ]
                },

            ]
        },

    ]
}




const ACTION_HANDLERS = {
    [CHANGE_THEME]    : function(state, action){
        return { ...state, theme: action.color }
    },
    [CHANGE_DAY]    : function(state, action){
        console.log(action.day);
        return { ...state, selectedDay: action.day }
    },
    [CLOSE_MODAL]    : function(state, action){
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: false,
            }
        }
    },
    [OPEN_EVENT_MODAL]    : function(state, action){
        return {
            ...state,
            modal: {
                ...state.modal,
                isVisible: true,
                event: action.event
            }
        }
    },
    [REMOVE_EVENT]    : function(state, action){
        const {initial, final} = action.event.event;

        return {
            ...state,
            days: {
                ...state.days,
                [state.selectedDay]: {
                    ...state.days[state.selectedDay],
                    timeIntervals:
                        state.days[state.selectedDay].timeIntervals.filter( interval =>
                        interval.initial!=initial && interval.final!=final
                    )
                }

            }
        }
    },

    [REMOVE_INTERVAL]    : function(state, action){
        const {initial, final} = action.event.event;
        const timeIntervals = action.timeInterval
        return {
            ...state,
            days: {
                ...state.days,
                [state.selectedDay]: {
                    ...state.days[state.selectedDay],
                    timeIntervals: state.days[state.selectedDay].timeIntervals.filter( interval =>
                        interval.initial==initial && interval.final==final
                    )
                }

            }
        }
    }
}

export default function shcedulerReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

