import React from 'react'
import {menData} from '../data/men'
const Men = () => {
  const firstFiveImages = menData.slice(0,5);
  return (
    <>
    <h2>Men</h2>
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

export default Men;
