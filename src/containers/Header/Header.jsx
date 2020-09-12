import React, { useState, useEffect, useRef } from 'react';
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
    const isAuthenticated = useSelector(
        (state) => state.authentication.isAuthenticated
    );
    const isFilterActive = useSelector(
        (state) => state.jogStore.isFilterActive
    );

    const [checked, setChecked] = useState(false);

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
                <Logo
                    className={`header__logo ${
                        checked ? 'header__logo_green' : ''
                    }`}
                />
            </Link>

            {isAuthenticated && (
                <nav>
                    <input
                        type="checkbox"
                        checked={checked}
                        id="switcher"
                        readOnly
                    />
                    <label htmlFor="switcher" className="show-menu-btn">
                        <img
                            src={menu}
                            alt="Menu"
                            onClick={() => setChecked(true)}
                        />
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
                                className={`header__items-instance`}
                                key={item.name}
                                to={item.path}
                                onClick={() => {
                                    if (checked) {
                                        setChecked(false);
                                    }
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <label htmlFor="switcher" className="hide-menu-btn">
                            <Cross onClick={() => setChecked(false)} />
                        </label>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
