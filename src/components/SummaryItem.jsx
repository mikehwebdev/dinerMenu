import React from "react";


export default function SummaryItem (props) {
    return (
        <div className='food-items'>
            <p className='food-items-name'>{props.foodName}</p>
            <button className={`${props.foodName} food-items-remove `} onClick={props.removefood}>remove</button>
            <p className='food-items-subtotal'>${props.foodPrice * props.foodCount}</p>
        </div>
    )
}