import React, { useState } from "react";
import './Cards.css'

function Cards({ item, onAddToCart }) {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="cards">
                <div className='cards-container'>
                    <img src={item.image} alt={item.name} />
                    <p className='description'> <b><u>{item.name}</u></b> </p>
                    <p className='price'> {item.price} </p>
                    <div className="quantity-container">
                        <button className='quantity-btn' onClick={() => setCount(Math.max(0, count - 1))}>-</button>
                        <p className='quantity'>{count}</p>
                        <button className='quantity-btn' onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    {count === 0 ? <button disabled className='disabled-order-btn' >Add</button>
                        : <button className='order-btn' onClick={() => { onAddToCart(item, count); setCount(0); }}>Add</button>
                    }
                </div>
            </div>
        </>
    )

}

export default Cards
