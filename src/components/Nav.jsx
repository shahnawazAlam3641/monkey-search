import React from 'react';
import logo from "../assets/logo.png";

const Nav = ()=>{
    return (
    <>
        <div className='flex justify-between items-center'>
            <div className='flex align items-center'>
                <img src={logo} className='w-16 h-16 mx-5 my-1' />
                <h1 className=' text-3xl text-white' >Monkey Search</h1>
            </div>
            <p className='text-2xl text-white mx-5'>Favourites</p>

        </div>
    </>

    )
}

export default Nav