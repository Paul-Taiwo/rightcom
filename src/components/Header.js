import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

// Icons
import Logo from '../assets/images/svgs/Path 2781.svg';
import bellImage from '../assets/images/svgs/bell.svg';
import searchIcon from '../assets/images/svgs/Icon-awesome-search.svg';
import englishFlagIcon from '../assets/images/svgs/united-kingdom@2x.png';
import gridMenuIcon from '../assets/images/svgs/grid-three-up.svg';

const Header = () => {
    // Dropdown State
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Use state to manage svg color change on h0ver
    const [navButtonColor, setNavButtonColor] = useState({
        home: 'grey',
        products: 'grey',
        explore: 'grey',
        userManage: 'grey',
        billing: 'grey',
        account: 'grey',
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
                                    className='a'
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
                            onMouseOver={(e) => addActiveColor(e, "products")}
                            onMouseLeave={(e) =>
                                removeActiveColor(e, "products")
                            }
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.products}
                                xmlns='http://www.w3.org/2000/svg'
                                width='12.25'
                                height='14'
                                className='mr-3'
                                viewBox='0 0 12.25 14'>
                                <path
                                    className='a'
                                    d='M0,0V14H12.25V7h-7V0ZM7,0V5.25h5.25Z'
                                />
                            </svg>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/explore'
                            onMouseOver={(e) => addActiveColor(e, "explore")}
                            onMouseLeave={(e) =>
                                removeActiveColor(e, "explore")
                            }
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.explore}
                                className='mr-3'
                                xmlns='http://www.w3.org/2000/svg'
                                width='14'
                                height='14'
                                viewBox='0 0 14 14'>
                                <path
                                    className='a'
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
                            onMouseOver={(e) => addActiveColor(e, "userManage")}
                            onMouseLeave={(e) =>
                                removeActiveColor(e, "userManage")
                            }
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.userManage}
                                className='mr-3'
                                xmlns='http://www.w3.org/2000/svg'
                                width='16.875'
                                height='15'
                                viewBox='0 0 16.875 15'>
                                <path
                                    className='a'
                                    d='M13.821,16.431v-.773A4.187,4.187,0,0,0,15.7,12.174c0-2.33,0-4.219-2.812-4.219s-2.812,1.889-2.812,4.219a4.187,4.187,0,0,0,1.875,3.484v.773c-3.18.26-5.625,1.823-5.625,3.712H19.446c0-1.889-2.445-3.452-5.625-3.712Zm-6.457.362a8.907,8.907,0,0,1,2.927-1.178,5.288,5.288,0,0,1-.593-.865,5.368,5.368,0,0,1-.681-2.577A8.324,8.324,0,0,1,9.465,8.75,3.052,3.052,0,0,1,11.8,7c-.248-1.12-.907-1.857-2.663-1.857-2.812,0-2.812,1.889-2.812,4.219A4.187,4.187,0,0,0,8.2,12.845v.773c-3.18.26-5.625,1.823-5.625,3.712H6.658a6,6,0,0,1,.706-.537Z'
                                    transform='translate(-2.571 -5.143)'
                                />
                            </svg>
                            USER MANAGEMENT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/billings'
                            exact
                            onMouseOver={(e) => addActiveColor(e, "billing")}
                            onMouseLeave={(e) =>
                                removeActiveColor(e, "billing")
                            }
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.billing}
                                className='mr-3'
                                xmlns='http://www.w3.org/2000/svg'
                                width='15.333'
                                height='14.154'
                                viewBox='0 0 15.333 14.154'>
                                <g transform='translate(-3.375 -4.499)'>
                                    <path
                                        className='a'
                                        d='M16.5,11.25H5.587a2.213,2.213,0,0,0-2.212,2.212v6.192a2.213,2.213,0,0,0,2.212,2.212H16.5a2.213,2.213,0,0,0,2.212-2.212V13.462A2.213,2.213,0,0,0,16.5,11.25Z'
                                        transform='translate(0 -3.212)'
                                    />
                                    <path
                                        className='a'
                                        d='M14.78,4.536,6.122,6.228C5.458,6.376,4.5,7.043,4.5,7.854a2.322,2.322,0,0,1,1.806-.7H16.885V6.4a2.117,2.117,0,0,0-.512-1.386h0A1.743,1.743,0,0,0,14.78,4.536Z'
                                        transform='translate(-0.535)'
                                    />
                                </g>
                            </svg>
                            Billings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/account'
                            onMouseOver={(e) => addActiveColor(e, "account")}
                            onMouseLeave={(e) =>
                                removeActiveColor(e, "account")
                            }
                            className='text-uppercase'>
                            <svg
                                fill={navButtonColor.account}
                                className='mr-3'
                                xmlns='http://www.w3.org/2000/svg'
                                width='14'
                                height='14'
                                viewBox='0 0 14 14'>
                                <path
                                    className='a'
                                    d='M7,.563a7,7,0,1,0,7,7A7,7,0,0,0,7,.563Zm0,2.71A2.484,2.484,0,1,1,4.516,5.756,2.484,2.484,0,0,1,7,3.272Zm0,9.71a5.409,5.409,0,0,1-4.135-1.925,3.147,3.147,0,0,1,2.78-1.688.691.691,0,0,1,.2.031A3.737,3.737,0,0,0,7,9.595,3.723,3.723,0,0,0,8.154,9.4a.691.691,0,0,1,.2-.031,3.147,3.147,0,0,1,2.78,1.688A5.409,5.409,0,0,1,7,12.982Z'
                                    transform='translate(0 -0.563)'
                                />
                            </svg>
                            My Account
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
