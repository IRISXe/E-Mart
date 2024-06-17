import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter(item => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]); // Allow multiple selections
    }
  };

  const filteredProduct = selectedProduct.length === 0 ? 
    mobileData : 
    mobileData.filter(orange => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {mobileData.map((phone, index) => (
            <div key={index}>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedProduct.includes(phone.company)}
                  onChange={() => companyHandler(phone.company)} // Corrected onChange
                />
                {phone.company}
              </label>
            </div>
          ))}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobilePage;
