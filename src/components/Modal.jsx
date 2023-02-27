import React, { useState } from "react";
import '../CSS/modal.css'

export default function Modal(props){
    
    const [cardDetails, setCardDetails] = useState({name:"", cardNo:"", cvv:""})
    function inputUpdater(event){
        setCardDetails(prev =>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
    })
    }

    return (
        <>
        {props.displayModal && <div className="modal">
            <h2>Enter card details</h2>
            <input placeholder="Enter your name" className="name" name="name" onChange={inputUpdater} value={cardDetails.name}/>
            <input placeholder="Enter card number" className="number" name="cardNo" onChange={inputUpdater} value={cardDetails.cardNo}/>
            <input placeholder="Enter CVV" className="cvv" name="cvv" onChange={inputUpdater} value={cardDetails.cvv}/>
            <button onClick={props.handleClick}>Pay</button>
        </div>}
        {props.displayThanks && <div className="sub-modal"><p>Thanks, James! Your order is on its way!</p></div>}
        </>
    )
} 