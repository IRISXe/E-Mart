import React from 'react'
import {watchData} from '../data/watch'
const Watch = () => {
  const firstFiveImages = watchData.slice(0,5)
  return (
    <>
    <h2>Watch</h2>
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

export default Watch;
