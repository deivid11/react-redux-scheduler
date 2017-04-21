import React from 'react'
import PropTypes from 'prop-types'

export const Modal = (props) =>{

    const { actions } = props
    const {isVisible, title, body, footer} = props.modal

    return(
        <div>
            {isVisible &&
            <div className="modal-mask">
                <div className="modal-wrapper">
                    <div className="modal-container">

                        <div className="modal-header">
                                {title &&
                                title
                                }
                        </div>

                        <div className="modal-body">
                            {body &&
                                body
                            }
                        </div>

                        <div className="modal-footer">
                            {footer &&
                                footer
                            }
                                <button className="modal-default-button" onClick={actions.closeModal}>
                                    OK
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    isVisible     : PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal
