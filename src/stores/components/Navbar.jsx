import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <>
      <div className="navsection">
        <div className="title">
            <h2>E-Mart</h2>
            <div className="search">
                <input type='text' placeholder='search...'/>
                <div className="user">
                    <div className="user-details">
                        SignIn/SignUp
                    </div>
                    <div className="cart">
                        cart
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="submenu">
        <ul>
            <Link to='/mobiles'>
            <li>Mobiles</li>
            </Link>
            <Link to='/Computers'>
            <li>Computers</li>
            </Link>
            <Link to='/Watches'> <li>Watches</li>
            </Link>
            <Link to='/MenPage'><li>MenPage</li>
            </Link>
            
            <li>woman dressing</li>
            <Link to='/furniture'><li>Furniture</li>
            </Link>
            
            <li>AC</li>
            <li>Kitchen</li>
        </ul>
    </div>
    </>
  
    
    
    
  )
}

export default Navbar
