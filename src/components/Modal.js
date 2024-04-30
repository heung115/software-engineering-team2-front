import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/Modal.css'; // 모달에 대한 스타일

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-content">{children}</div>
        </>,
        document.getElementById('modal-root'),
    );
};

export default Modal;
