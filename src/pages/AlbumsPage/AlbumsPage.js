import React, {useEffect, useState} from "react";
import AlbumsCardList from "../../components/AlbumsCardList/AlbumsCardList";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import "./AlbumsPage.scss";
import {albumCategoryOptions} from "../../utils/constants.js";
import {sortCategoryOptions} from "../../utils/constants.js";
import {getAlbums} from "../../utils/AlbumsApi";
import Preloader from "../../components/Preloader/Preloader";

function AlbumsPage() {
    const [selectedAlbumCategory, setSelectedAlbumCategory] = useState(
        "All Albums"
    );
    const [selectedSortCategory, setSelectedSortCategory] = useState(
        "date from new to old"
    );
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAlbums()
            .then((data) => {
                setAlbums(
                    data.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
                );
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, []);

    const handleAlbumCategoryChange = (e) => {
        setSelectedAlbumCategory(e.target.value);
    };

    const handleSortCategoryChange = (e) => {
        setSelectedSortCategory(e.target.value);
        setAlbums(sortAlbums([...albums], e.target.value));
    };

    const sortAlbums = (albums, sortCategory) => {
        switch (sortCategory) {
            case "date from old to new":
                return albums.sort(
                    (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
                );
            case "name":
                return albums.sort((a, b) =>
                    a.albumName.localeCompare(b.albumName)
                );
            case "number of tracks":
                return albums.sort((a, b) => a.trackList.length - b.trackList.length);
            default:
                return albums;
        }
    }

    return (
        <main className="discography">
            <CategoryDropdown
                albumCategoryOptions={albumCategoryOptions}
                sortCategoryOptions={sortCategoryOptions}
                selectedAlbumCategory={selectedAlbumCategory}
                selectedSortCategory={selectedSortCategory}
                onAlbumCategoryChange={handleAlbumCategoryChange}
                onSortCategoryChange={handleSortCategoryChange}
            />
            <AlbumsCardList
                albums={albums}
                selectedAlbumCategory={selectedAlbumCategory}
            />
            { isLoading && <Preloader/> }
        </main>
    );
}

export default AlbumsPage;
