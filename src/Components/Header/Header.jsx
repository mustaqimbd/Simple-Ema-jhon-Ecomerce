import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='h-[80px] bg-[#1C2B35] px-5 flex justify-between'>
            <div className='flex h-full items-center'>
                <img src={logo} alt="" />
            </div>
            <div className='text-white flex h-full items-center gap-8 pr-8'>
                <a href="">Order</a>
                <a href="">Order review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;