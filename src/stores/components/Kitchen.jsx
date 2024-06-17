import React from 'react'
import {kitchenData} from '../data/kitchen'
const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5);
    return (
        <>
        <h2>Kitchen</h2>
           <div className='proSection'>
          {
            firstFiveImages.map((item) => (
              <div className='imageBox' key={item.id}>
                <img src={item.image} alt={item.name} />
              </div>
            ))
          }
        </div>
        </>
      )
}

export default Kitchen;
