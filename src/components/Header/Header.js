import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Header.scss";
import headerLogo from "../../images/bannerImages/header-logo.svg";

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={headerLogo} alt="Stray Kids logotype" className="header__logo-image"/>
                </Link>
                <nav className="header__menu">
                    <ul className="header__menu-container">
                        <li className="header__menu-link">
                            <Link to="/members" className={`header__menu-link-item ${location.pathname === '/members' ? 'header__menu-link-item_active' : ''}`}>
                                Members
                            </Link>
                        </li>
                        <li className="header__menu-link">
                            <Link to="/albums" className={`header__menu-link-item ${location.pathname === '/albums' ? 'header__menu-link-item_active' : ''}`}>
                                Albums
                            </Link>
                        </li>
                        <li className="header__menu-link">
                            <Link to="/history" className={`header__menu-link-item ${location.pathname === '/history' ? 'header__menu-link-item_active' : ''}`}>
                                History
                            </Link>
                        </li>
                        <li className="header__menu-link">
                            <Link to="/social-media" className={`header__menu-link-item ${location.pathname === '/social-media' ? 'header__menu-link-item_active' : ''}`}>
                                Social Media
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;