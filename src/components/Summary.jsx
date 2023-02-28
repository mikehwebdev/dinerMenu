import React, { useState } from 'react'
import Modal from './Modal'
import '../CSS/summary.css'

export default function Summary ({summaryElements}) {   
   
   const [displayModal, setDisplayModal] = useState(false)
   const [displayThanks, setDisplayThanks] = useState(false)   

   function completeOrder(){
        setDisplayModal(prev => !prev)
   } 

   function payWithCard(){
        setDisplayThanks(prev => !prev)
        setDisplayModal(prev => !prev)
        setDisplaySummary(false)
    }

    const grandTotalArray = summaryElements.map(elem =>{
        return elem.props.foodTotal
       }).reduce((tot, num)=> tot + num )

    return (
         <div className='summary'>
            <h2>Your order</h2>
            <div className='food-item-summary-container'>
                {summaryElements}
            </div>

            <div className='food-total-container'>
                <p className='total-price'>Total Price</p>
                <p className='total-dollars'>${grandTotalArray}</p>
            </div>
            
            <button onClick={completeOrder}>Complete order</button>
            <Modal
                displayModal={displayModal}
                displayThanks={displayThanks}
                handleClick={payWithCard}
            />
        </div>
    )
}