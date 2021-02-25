import ModalComponent from "react-modal";

const root = document.getElementById("root");

// For accesibility, so all elements below modal have set aria to hidden for screen readers (http://reactcommunity.org/react-modal/accessibility/)
ModalComponent.setAppElement("#root");

const Modal = ({isModalOpen, closeModal}) => {
    return (
        <ModalComponent
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal__overlay"
            contentLabel="Succes Message Modal"
            parentSelector={() => root}>
                <h1 className="modal__header">DZIĘKUJEMY</h1>
                <p className="modal__text">Skontaktujemy się z Tobą w najbliższym możliwym terminie.</p>
                <button className="modal__button" onClick={closeModal}>OK</button>
        </ModalComponent>
    )
}

export default Modal;