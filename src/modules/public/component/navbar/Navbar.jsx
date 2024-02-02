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
  <span>HOME</span>
  <span>ABOUT</span>
  <span>CONTACT</span>
</div>
<div className="navbar-center-div">
  <h1 className="heading-div"><span className='red'>RED</span><span className='parts'>PARTS</span></h1>
  <div className="input-div"><input type="text" placeholder='SEARCH CATEGORIES' /></div>
</div>
<div className="navbar-right-div">
  <span>CATEGORIES &#9660;</span>
  <span className='cart-icon'><FaOpencart /></span>
  <span className='admin-icon'><RiAdminLine /></span>
  </div>

    </div>
  )
}

export default Navbar