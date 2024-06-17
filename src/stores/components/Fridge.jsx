import React from 'react'
import {fridgeData } from '../data/fridge'
const fridge = () => {
    const firstFiveImages = fridgeData.slice(0,5);
    return (
        <>
        <h2>fridge</h2>
        <div className='proSection'>
            {firstFiveImages.map((item, index) => ( // Add index parameter
                <div className='imageBox' key={item.id}> {/* Add key prop */}
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div></>
    );
}

export default fridge;
