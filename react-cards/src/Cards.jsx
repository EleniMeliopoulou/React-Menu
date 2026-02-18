import React, { useState } from "react";
import './Cards.css'
import Alert from '@mui/material/Alert';

function Cards(props) {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [total, setTotal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [payment, setPayment] = useState("");

    const handleSubClick = () => {
        setMessage("")
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAddClick = () => {
        setMessage("")
        if (count < 99) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    }

    const handleOrderClick = () => {
        const finalCount = count;
        const finaltotal = finalCount * parseFloat(props.price);

        setTotal(finaltotal);
        setMessage(`The total is ${finaltotal} €`);
        setShowModal(true);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const Modal = ({ message, onClose, proceedWithOrder }) => {
        return (
            <div className="modal-overlay">
                <div className="successful_order_modal">
                    <p className="order-msg">Your order consists of <br />{count} item/s of {props.item}. <br /><br /> {message}.</p>
                    <p className="order-msg">How would you like to pay?</p>
                    <select value={payment} onChange={handlePaymentChange}>
                        <option value="">Select an Option</option>
                        <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="Cash">Cash</option>
                    </select>
                    <button className="success-btn" onClick={proceedWithOrder}>Proceed with the Payment</button>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>);
    };

    return (
        <>
            <div className="cards">
                <div className='cards-container'>
                    <img src={props.image} alt="coffee image" />
                    <p className='description'> <b><u>{props.item}</u></b> </p>
                    <p className='price'> {props.price} </p>
                    <div className="quantity-container">
                        <button className='quantity-btn' onClick={handleSubClick}>-</button>
                        <p className='quantity'>{count}</p>
                        <button className='quantity-btn' onClick={handleAddClick}>+</button>
                    </div>
                    {count === 0 ? <button disabled className='disabled-order-btn' >Order</button>
                        : <button className='order-btn' onClick={handleOrderClick}>Order</button>
                    }
                </div>
                {showModal && (
                    <Modal
                        message={message} onClose={() => { setShowModal(false); setCount(0) }}
                        proceedWithOrder={() => { setShowModal(false); setCount(0); setShowAlert(true) }} />
                )}
                {showAlert && (
                    <Alert className="alert-class" severity="success" onClose={() => { setShowAlert(false) }}>
                        Your order has successfully been placed. You chose to pay by {payment}. The total is {total} €.
                    </Alert>
                )}
            </div>
        </>
    )

}

export default Cards
