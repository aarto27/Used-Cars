import React, { useState } from 'react';

const Modal = ({ car }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="buy-now-btn" onClick={openModal}>Buy Now</button>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <img src={car.image} alt={car.name} className="modal-image" />
                        <h2>{car.name}</h2>
                        <h3>Fuel Type: {car.fuel_type}</h3>
                        <h3 style={{ color: 'green' }}>Price: ${car.price}</h3>
                        <button className="proceed-btn">Proceed to Buy</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
