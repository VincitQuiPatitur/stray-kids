import React from "react";
import AlbumsCard from "../AlbumsCard/AlbumsCard";
import "./AlbumsCardList.scss";

function AlbumsCardList({ albums, selectedAlbumCategory }) {
    const filteredAlbums =
        selectedAlbumCategory === "All Albums"
            ? albums
            : albums.filter((album) =>
                album.category.includes(selectedAlbumCategory)
            );

    return (
        <section className="albums">
            <ul className="albums__container">
                {filteredAlbums.map((album) => (
                    <AlbumsCard key={album.id} album={album} />
                ))}
            </ul>
        </section>
    );
}

export default AlbumsCardList;
