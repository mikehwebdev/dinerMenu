import React from "react"
import '../CSS/menu-item.css'

export default function MenuItem({image, food, ingredients, price, handleClick}) {
    return (
        <div className="menu-item">
            <p className="menu-item-img">{image}</p>
            <h1 className="menu-item-food">{food}</h1>
            <h2 className="menu-item-ingredients">{ingredients}</h2>
            <p className="menu-item-price">${price}</p>
            <button className={`${food} menu-item-`} onClick={handleClick}>+</button>
        </div>
    )
}