import React from "react";
import { Link } from "react-router-dom";

function AlbumsCard({ album }) {
    return (
        <li className="albums__item">
            <Link to={`/albums/${album.id}`} className="albums__link">
                <img src={album.albumCover} alt={album.albumName} className="albums__image"/>
                <h2 className="albums__title">{album.albumName}</h2>
            </Link>
        </li>
    );
}

export default AlbumsCard;