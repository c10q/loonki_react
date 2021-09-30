import React, {useState} from 'react';
import './Login.scss'
import {ReactComponent as Logo} from '../../images/svg/Grayscale.svg'


const Login: React.FC = () => (
    <div className='Login'>
        <div className='LoginContainer'>
            <span className='LoginTitle'>Login</span>
            <div className='LoginBox'>
                <Logo className='LoginLogo'/>
                <input className='LoginInput' type="email"/>

                <input className='LoginInput' type="password"/>
            </div>
        </div>
    </div>
);

export default Login;