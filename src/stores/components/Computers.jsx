import React from 'react';
import { computerData } from '../data/computers';

const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
    <h2>Computers</h2>
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

export default Computers;
