import React from 'react'
import logo from './logo.png';

export const Logo = () => {
    return (

        <div className='parent'>
        <div className='child inline-block-child'><a href='/'><img src={logo} alt="logo" height='200' width='200'/></a></div>
        </div>
    )
}
