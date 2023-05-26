import React from "react";
import "./Footer.scss";
import FooterIcons from "../FooterIcons/FooterIcons";
import {socialMediaIcons} from "../../data/socialMediaIcons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__slogan">
                <p className="footer__slogan-text">Stray Kids everywhere all around the world</p>
                <p className="footer__slogan-text">You make Stray Kids stay</p>
            </div>
            <div className="footer__links">
                <p className="footer__author" title="Arina Kostrova">&copy;&nbsp;2023. Created by&nbsp;one stay</p>
                <ul className="footer__icons">
                    {socialMediaIcons.map((link) => (
                        <FooterIcons key={link.id} link={link}/>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;