import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #4b0082;
    z-index: 1001;
    border-radius: 8px;
    // width: 90%;
    height: auto%;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent>{children}</ModalContent>
        </>,
        document.getElementById('modal-root'),
    );
};

export default Modal;
