import React from 'react';
import { Link } from 'react-router-dom';

import rightComLogo from '../assets/images/svgs/rightcom.svg';

const Footer = () => {
    return (
        <footer className='footer d-flex'>
            <div className='w-50'>
                <ul className='footer__links--container'>
                    <li style={{ color: "#0089E1" }}> c 2020</li>
                    <li>
                        <Link>Explore RightCom XP</Link>
                    </li>
                    <li>
                        <Link>More Products</Link>
                    </li>
                    <li>
                        <Link>Help and Information</Link>
                    </li>
                </ul>
            </div>
            <div className='w-50'>
                <p className='footer__rightcom'>A product of <span className='mr-1' /> <img src={rightComLogo} alt="RightCom" /></p>
            </div>
        </footer>
    );
}

export default Footer;