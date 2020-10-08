import React, { FC, useState } from 'react';

interface Props {
    showModal: boolean,
}

const ModalComponent: FC<Props> = ({ showModal, children }) => {

    const [display, setDisplay] = useState(showModal)

    function closeModal() {
        console
    }
    
    return display ? (
        <div className="modal">
            <div className="modal__bg"></div>
            <div className="modal__content">
                <button className="modal__close" onClick={() => closeModal('close', {})}>X</button>
                {children}
            </div>
        </div>
    ) : null;
}

export default ModalComponent;