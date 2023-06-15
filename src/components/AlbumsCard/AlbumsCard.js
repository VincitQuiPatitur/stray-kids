import React from "react";
import cover from "../../images/albums/I_am_NOT.jpg";

function AlbumsCard() {
    return (
        <li className="albums__item">
            <img src={cover} alt="album cover" className="albums__image"/>
            <h2 className="albums__title">I am NOT</h2>
        </li>
    );
}

export default AlbumsCard;