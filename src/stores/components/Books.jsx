import React from 'react'
import { booksData } from '../data/books'
const Books = () => {
    const firstFiveImages = booksData.slice(0,5);
    return (
        <>
        <h2>BOOKS</h2>
        <div className='proSection'>
            {firstFiveImages.map((item, index) => ( // Add index parameter
                <div className='imageBox' key={item.id}> {/* Add key prop */}
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div></>
    );
}

export default Books
