import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { ReactComponent as Filter } from '../../images/filter/filter.svg';
import './Header.scss';

const headerItems = [
    { name: 'Jogs', path: '/jogs' },
    { name: 'Info', path: '/info' },
    { name: 'Contact Us', path: '/contact-us' },
];

const Header = ({ isAuthenticate }) => {
    const [isFilterActive, setFilterActive] = useState(false);
    return (
        <header>
            <Link to="/">
                <img src={logo} className="header__logo" />
            </Link>
            {!isAuthenticate && (
                <nav>
                    <ul className="header__items">
                        {headerItems.map((item) => (
                            <li
                                className="header__items-instance"
                                key={item.name}
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                        <li className={`header__items-instance`}>
                            <Filter
                                onClick={() => setFilterActive((prev) => !prev)}
                                className={`header__items-instance-filter${
                                    isFilterActive ? '' : '_inactive'
                                }`}
                            />
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};
Header.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
};
export default Header;
