import React, { Component } from "react";
import { createPortal } from "react-dom";
import './index.css'

const rootModal = document.querySelector('#root-modal');

class Modal extends Component{

    closeModalBackdrob = e => {
        if (e.target === e.currentTarget) {
            this.props.onCloseModal();
        };
    };
    componentDidMount() {
        window.addEventListener('keydown' , this.closeModalEscape)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown' , this.closeModalEscape)
    }

    closeModalEscape = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    };

    render() {
        return createPortal(
            <div className='overlay' onClick={this.closeModalBackdrob}>
                <div className='modal'>{this.props.children}</div>
            </div>,
    rootModal,
        )
    }
};


export default Modal;

