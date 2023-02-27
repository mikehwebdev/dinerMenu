import React, { useState } from "react"
import Summary from "./Summary"
import SummaryItem from "./SummaryItem"
import MenuItem from '../components/MenuItem'
import '../CSS/menu.css'
import { data } from "./data"

export default function Menu () {

    const [pizza, setPizza] = useState(data.pizza)
    const [burger, setBurger] = useState(data.burger)
    const [beer, setBeer] = useState(data.beer)

    const foodArray = [pizza,burger,beer]

    const foodElements = foodArray.map(elem =>(
        <MenuItem
            key={elem.name}
            image={elem.image}
            food={elem.name}
            ingredients={elem.ingredients}
            price={elem.price}
            count={elem.count}
            handleClick={incrementor}
    />
    ))

    const summaryElements = foodArray.map(elem =>(
        <SummaryItem
            key={elem.name}
            foodName={elem.name}
            foodCount={elem.count}
            foodPrice={elem.price}
            removefood={decrementor}
            foodTotal={elem.count * elem.price}
    />
    ))
        

    function incrementor(e) {
        const food = e.target.classList[0]
    
        if (food === 'Pizza') {
            setPizza(prev => ({
                ...prev,
                count: prev.count + 1
            }))
        } else if (food === 'Burger') {
            setBurger(prev => ({
                ...prev,
                count: prev.count + 1
            }))
        } else if (food === 'Beer') {
            setBeer(prev => ({
                ...prev,
                count: prev.count + 1
            }))
        }
    }
    
function decrementor(e) {
    const food = e.target.classList[0]

    if (food === 'Pizza' && pizza.count !== 0) {
        setPizza(prev => ({
            ...prev,
            count: prev.count - 1
        }))
    } else if (food === 'Burger' && burger.count !== 0) {
        setBurger(prev => ({
            ...prev,
            count: prev.count - 1
        }))
    } else if (food === 'Beer' && beer.count !== 0) {
        setBeer(prev => ({
            ...prev,
            count: prev.count - 1
        }))
    }
}

    return (
        <div className="menu">
                {foodElements}
        <Summary
               summaryElements={summaryElements}
        />
        </div>
        
    )
}