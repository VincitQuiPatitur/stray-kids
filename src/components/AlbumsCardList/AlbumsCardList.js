import React from "react";
import AlbumsCard from "../AlbumsCard/AlbumsCard";
import "./AlbumsCardList.scss";

function AlbumsCardList() {
    return (
        <section className="albums">
            <ul className="albums__container">
            <AlbumsCard />
            <AlbumsCard />
            <AlbumsCard />
            <AlbumsCard />
            <AlbumsCard />
            <AlbumsCard />
            <AlbumsCard />
            <AlbumsCard />
            </ul>
        </section>
    );
}

export default AlbumsCardList;