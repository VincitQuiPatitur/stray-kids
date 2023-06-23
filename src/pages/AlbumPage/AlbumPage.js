import React, {useEffect, useState} from "react";
import {getAlbumById} from "../../utils/AlbumsApi";
import {useParams} from "react-router-dom";
import "./AlbumPage.scss";
import Preloader from "../../components/Preloader/Preloader";

function AlbumPage() {
    const {id} = useParams();
    const [album, setAlbum] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }

    useEffect(() => {
        setIsLoading(true);
        getAlbumById(id)
            .then(data => {
                setAlbum(data);
                console.log(data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }, [id]);

    const formattedReleaseDate = album ? formatDate(album.releaseDate) : '';

    return (
        <main className="album">
            <section className="album__container">
                {album ? (
                    <>
                        <div className="album__information">
                            <h1 className="album__name">Stray Kids - {album.albumName}</h1>
                            <p className="album__type">{album.type}</p>
                            <p className="album__date">{formattedReleaseDate}</p>
                            <h2 className="album__title">{album.title}</h2>
                            <div className="album__description">
                                {album.description.map((paragraph, index) => (
                                    <p className="album__paragraph" key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="album__image">
                            <img src={album.albumCover} alt={album.albumName} className="album__cover"/>
                            <h3 className="album__track-title">Track list</h3>
                            <ol className="album__track-list">
                                {album.trackList.map((track, index) => (
                                    <li className="album__track-item" key={index}>{track}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="album__video">
                            <iframe width="1120" height="630" src="https://www.youtube.com/embed/JsOOis4bBFg"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </>
                ) : null}
            </section>
            { isLoading && <Preloader/> }
        </main>
    );
}

export default AlbumPage;
