import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss";
import headerLogo from "../../images/bannerImages/header-logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={headerLogo} alt="Stray Kids logotype" className="header__logo-image"/>
                </Link>
                <nav className="header__menu">
                    <ul className="header__menu-container">
                        <li className="header__menu-link">
                            <Link to="/members" className="header__menu-link-item">
                                Members
                            </Link>
                        </li>
                        <li className="header__menu-link">
                            <Link to="/albums" className="header__menu-link-item">
                                Albums
                            </Link>
                        </li>
                        <li className="header__menu-link">
                            <Link to="/history" className="header__menu-link-item">
                                History
                            </Link>
                        </li>
                        <li className="header__menu-link">
                            <Link to="/social-media" className="header__menu-link-item">
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