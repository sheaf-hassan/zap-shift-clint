import React from 'react';
import ProFastLogo from '../router/shared/ProFastLogo/ProFastLogo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <ProFastLogo></ProFastLogo>
            <div className='flex'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
