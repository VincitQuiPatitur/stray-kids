import React from "react";
function AlbumsPage({ link }) {
    return (
        <li>
            <a href={link.href} target="_blank">
                <img className="footer__social-icon"
            src={link.img}
            alt={`${link.name} icon`}/>
            </a>
        </li>
    );
}

export default AlbumsPage;