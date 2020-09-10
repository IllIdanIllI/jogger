import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../images/logo/logo.png';
import { ReactComponent as Filter } from '../../images/filter/filter.svg';
import './Header.scss';
import { JOGS_URL, INFO_URL, CONTACT_URL } from '../../constants/constants';
import { toggleFilter } from '../../actions/jogsActions';
import { useActions } from '../../custom/customHooks';

const headerItems = [
    { name: 'Jogs', path: JOGS_URL },
    { name: 'Info', path: INFO_URL },
    { name: 'Contact Us', path: CONTACT_URL },
];

const Header = () => {
    const [currentPath, setCurrentPath] = useState(null);

    const isAuthenticated = useSelector(
        (state) => state.authentication.isAuthenticated
    );
    const isFilterActive = useSelector(
        (state) => state.jogStore.isFilterActive
    );

    const [onToggleFilter] = useActions([toggleFilter]);

    return (
        <header>
            <Link to="/">
                <img src={logo} className="header__logo" />
            </Link>
            {isAuthenticated && (
                <nav>
                    <ul className="header__items">
                        {headerItems.map((item) => (
                            <li
                                onClick={() => setCurrentPath(item.path)}
                                className={`header__items-instance${
                                    currentPath === item.path
                                        ? '_highlight'
                                        : ''
                                }`}
                                key={item.name}
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                        <li className={`header__items-instance`}>
                            <Filter
                                onClick={() => onToggleFilter(isFilterActive)}
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

export default Header;
