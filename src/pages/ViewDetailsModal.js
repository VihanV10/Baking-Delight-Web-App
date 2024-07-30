import './ViewDetailsModal.css';
import { useState } from 'react';

function ViewDetailsModal({ item, onClose }) {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.details}</p>
          <button className="close-btn" onClick={handleClose}>Close</button>

        </div>
      </div>
    )
  );
}

export default ViewDetailsModal;