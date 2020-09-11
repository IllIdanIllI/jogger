import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import menu from '../../images/menu/menu.png';
import { ReactComponent as Cross } from '../../images/cancel/cancel.svg';
import { ReactComponent as Logo } from '../../images/logo/logo.svg';
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

    const [onToggleFilter] = useActions([toggleFilter], []);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== JOGS_URL && isFilterActive) {
            onToggleFilter(isFilterActive);
        }
    }, [location.pathname]);

    return (
        <header>
            <Link to="/">
                <Logo className="header__logo" />
            </Link>

            {isAuthenticated && (
                <nav>
                    <input type="checkbox" id="switcher" />
                    <label htmlFor="switcher" class="show-menu-btn">
                        <img src={menu} alt="Menu" />
                    </label>
                    <div className={`header__items-filter`}>
                        <Filter
                            onClick={() =>
                                location.pathname === JOGS_URL &&
                                onToggleFilter(isFilterActive)
                            }
                            className={`header__items-filter-instance${
                                isFilterActive ? '' : '_inactive'
                            }`}
                        />
                    </div>
                    <ul className="header__items">
                        {headerItems.map((item) => (
                            <Link
                                onClick={() => setCurrentPath(item.path)}
                                className={`header__items-instance${
                                    currentPath === item.path
                                        ? '_highlight'
                                        : ''
                                }`}
                                key={item.name}
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <label for="switcher" class="hide-menu-btn">
                            <Cross />
                        </label>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
