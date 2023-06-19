import React from "react";

function AlbumsCard({ album }) {
    return (
        <li className="albums__item">
            <img src={album.albumCover} alt={album.albumName} className="albums__image"/>
            <h2 className="albums__title">{album.albumName}</h2>
        </li>
    );
}

export default AlbumsCard;