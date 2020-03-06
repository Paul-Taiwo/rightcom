import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

// Icons
import Logo from '../assets/images/svgs/Path 2781.svg';
import bellImage from '../assets/images/svgs/bell.svg';
import searchIcon from '../assets/images/svgs/Icon-awesome-search.svg';
import englishFlagIcon from '../assets/images/svgs/united-kingdom@2x.png';
import gridMenuIcon from '../assets/images/svgs/grid-three-up.svg';
import homeIcon from "../assets/images/svgs/home-icon.svg";

const Header = () => {
    // Dropdown State
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Nav Links Color State
    const [navButtonColor, setNavButtonColor] = useState({
        home: 'grey',
        products: 'grey',
        explore: 'grey',
        userManage: 'grey',
    });

    // Dropdown toggle handler
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const addActiveColor = (e, link) => {
        setNavButtonColor({...navButtonColor, [link]: '#0089E1'});
    }
    const removeActiveColor = (e, link) => {
        setNavButtonColor({ ...navButtonColor, [link]: 'grey' });
    }

    return (
        <div>
            <header className='header'>
                <div className='header__brand'>
                    <img src={Logo} alt='Logo' />
                </div>
                <ul className='header__links'>
                    <li>
                        <img src={bellImage} alt='Notification' />
                    </li>
                    <li>
                        <button
                            type='button'
                            className='btn header__links--search'>
                            <img src={searchIcon} alt='Notification' /> Search
                        </button>
                    </li>
                    <li>
                        <p>Alhassan dantata</p>
                    </li>
                    <li>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                <img src={englishFlagIcon} alt='Notification' />{" "}
                                English
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem>Some Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <div className='header__links--menu'>
                            <img src={gridMenuIcon} alt='Menu' />
                        </div>
                    </li>
                </ul>
            </header>
            <nav className='nav bg-white'>
                <ul className='nav__container'>
                    <li>
                        <NavLink
                            to='/home'
                            className='text-uppercase'
                            onMouseOver={(e) => addActiveColor(e, "home")}
                            onMouseLeave={(e) => removeActiveColor(e, "home")}>
                            <svg
                                fill={navButtonColor.home}
                                className='mr-3'
                                xmlns='http://www.w3.org/2000/svg'
                                width='16.471'
                                height='14'
                                viewBox='0 0 16.471 14'>
                                <path
                                    class='a'
                                    d='M9.588,18.5V13.559h3.294V18.5H17V11.912h2.471L11.235,4.5,3,11.912H5.471V18.5Z'
                                    transform='translate(-3 -4.5)'
                                />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/products'
                            onMouseOver={(e) => addActiveColor(e, 'products')}
                            onMouseLeave={(e) => removeActiveColor(e, 'products')}
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.products}
                                xmlns='http://www.w3.org/2000/svg'
                                width='12.25'
                                height='14'
                                className='mr-3'
                                viewBox='0 0 12.25 14'>
                                <path
                                    class='a'
                                    d='M0,0V14H12.25V7h-7V0ZM7,0V5.25h5.25Z'
                                />
                            </svg>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/explore' 
                            onMouseOver={(e) => addActiveColor(e, 'explore')}
                            onMouseLeave={(e) => removeActiveColor(e, 'explore')} 
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.explore}
                                className='mr-3'
                                xmlns='http://www.w3.org/2000/svg'
                                width='14'
                                height='14'
                                viewBox='0 0 14 14'>
                                <path
                                    class='a'
                                    d='M10,9.23a.77.77,0,1,0,.77.77A.768.768,0,0,0,10,9.23ZM10,3a7,7,0,1,0,7,7A7,7,0,0,0,10,3Zm1.533,8.533L5.8,14.2,8.467,8.467,14.2,5.8Z'
                                    transform='translate(-3 -3)'
                                />
                            </svg>
                            Explore
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/user-management'
                            onMouseOver={(e) => addActiveColor(e, 'userManage')}
                            onMouseLeave={(e) => removeActiveColor(e, 'userManage')} 
                            className='text-uppercase'>
                            <img className='mr-3' src={homeIcon} alt='Home' />{" "}
                            USER MANAGEMENT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/billings'
                            exact
                            onMouseOver={(e) => addActiveColor(e, 'billing')}
                            onMouseLeave={(e) => removeActiveColor(e, 'billing')}
                            className='text-uppercase'>
                            <img className='mr-3' src={homeIcon} alt='Home' />{" "}
                            Billings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/account' className='text-uppercase'>
                            <img className='mr-3' src={homeIcon} alt='Home' />{" "}
                            My Account
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
