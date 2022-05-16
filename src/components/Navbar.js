import { useState } from 'react';
import {HiMenueAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/hi';

import logo from '../images/gist.png';

const NavbarItem = ({title, classProps}) =>{

    return(
        <li className={'${classProps}'}>
            {title}
        </li>

    );

}

const Navbar = () =>
{
    return (
        <nav className=''>

            <div className=''>
                <img src={logo} alt="logo" />

            </div>
            <ul className=''>
                {["Market","Exchange","Tutorials","Wallet"].map((item,index)=>(

                    <NavbarItem key={item+index} title={item}/>

                ))}
                <li>Login</li>
            </ul>

        </nav>
    );
}

export default Navbar;
