import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {
    const firstFiveImages = furnitureData.splice(0,5);
    return (
        <>
        <h2>Furniture</h2>
        <div className='proSection'>
            {firstFiveImages.map((item, index) => ( // Add index parameter
                <div className='imageBox' key={item.id}> {/* Add key prop */}
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div></>
    );
  
}

export default Furniture;
