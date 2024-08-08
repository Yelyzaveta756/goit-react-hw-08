import { useState } from 'react';
import Modal from 'react-modal';
import css from "./ConfirmDeleteModal.module.css"

Modal.setAppElement('#root'); // Додай це, щоб уникнути помилок доступності

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2>Ви впевнені, що хочете видалити цей контакт?</h2>
      <button onClick={onConfirm}>Так</button>
      <button onClick={onRequestClose}>Ні</button>
    </Modal>
  );
};

export default ConfirmDeleteModal;
