import React from "react";


export default function SummaryItem ({foodName, removefood, foodPrice, foodCount}) {
    return (
        <div className='food-items'>
            <p className='food-items-name'>{foodName}</p>
            <button className={`${foodName} food-items-remove `} onClick={removefood}>remove</button>
            <p className='food-items-subtotal'>${foodPrice * foodCount}</p>
        </div>
    )
}