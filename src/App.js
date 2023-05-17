import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import MembersPage from "./pages/MembersPage/MembersPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import SocialMediaPage from "./pages/SocialMediaPage/SocialMediaPage";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/'
                           element={<MainPage/>}
                    />
                    <Route path='/members'
                           element={<MembersPage/>}
                    />
                    <Route path='/albums'
                           element={<AlbumsPage/>}
                    />
                    <Route path='/history'
                           element={<HistoryPage/>}
                    />
                    <Route path='/social-media'
                           element={<SocialMediaPage/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
