import React, {useEffect, useState} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import MembersPage from "./pages/MembersPage/MembersPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import SocialMediaPage from "./pages/SocialMediaPage/SocialMediaPage";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import Preloader from "./components/Preloader/Preloader";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/'
                           element={<MainPage/>}
                    />
                    <Route path='/members'
                           element={<MembersPage
                               isLoading={isLoading}
                               setIsLoading={setIsLoading}
                           />}
                    />
                    <Route path='/albums'
                           element={<AlbumsPage
                               isLoading={isLoading}
                               setIsLoading={setIsLoading}
                           />}
                    />
                    <Route path='/albums/:id'
                           element={<AlbumPage
                               isLoading={isLoading}
                               setIsLoading={setIsLoading}
                           />}
                    />
                    <Route path='/history'
                           element={<HistoryPage/>}
                    />
                    <Route path='/social-media'
                           element={<SocialMediaPage/>}
                    />
                </Routes>
                <Footer />
                {
                    !isLoading && <Preloader/>
                }
            </div>
        </div>
    );
}

export default App;
