import React from 'react';
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0, 5);

    return (
        <>
        <h2>Mobiles</h2>
        <div className='proSection'>
            {firstFiveImages.map((item, index) => ( // Add index parameter
                <div className='imageBox' key={item.id}> {/* Add key prop */}
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div></>
    );
}

export default Mobiles;
