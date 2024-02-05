import React, { useEffect } from 'react'
import "./Navbar.scss"
import { FaOpencart } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch} from 'react-redux';

function Navbar() {
    const dispatch = useDispatch()
    const val = "two"
    useEffect(() => {
        dispatch({
            type:"secondVal",
    payload: val,
    });
    });
  return (
    <div className='navbar'>

<div className="navbar-left-div">
  <span className='navbar-span'>HOME</span>
  <span className='navbar-span'>ABOUT</span>
  <span className='navbar-span'>CONTACT</span>
</div>
<div className="navbar-center-div">
  <h1 className="navbar-heading-div"><span className='navbar-red'>RED</span><span className='navbar-parts'>PARTS</span></h1>
  <div className="navbar-input-div"><input type="text" placeholder='SEARCH PRODUCTS' /></div>
</div>
<div className="navbar-right-div">
  <span>CATEGORIES &#9660;</span>
  <span className='navbar-cart-icon'><FaOpencart /></span>
  <span className='navbar-admin-icon'><RiAdminLine /></span>
  </div>

    </div>
  )
}

export default Navbar