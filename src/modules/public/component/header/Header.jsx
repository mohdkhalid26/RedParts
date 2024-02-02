import React, { useEffect } from 'react'
import "./Header.scss"
import {useSelector, useDispatch } from 'react-redux'
function Header() {
    const {first} = useSelector(state=>state.reducerFirst)
    const {second} = useSelector(state=>state.reducerSecond)
    const dispatch = useDispatch()
    const val = "one"
    useEffect(() => {
        dispatch({
            type:"firstVal",
    payload: val,
    });
    });
  return (
    <div className='header'>
<div>
<h2>Find Parts For Your Vehicle{first}</h2>
<p>Over hundreds of brands and tens of thousands of parts{second}</p>
</div>
    </div>
  )
}

export default Header