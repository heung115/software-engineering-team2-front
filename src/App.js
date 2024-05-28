import React, { useState } from 'react';
import { MainPage } from './pages/MainPage';
import { SearchPage } from './pages/SearchPage';
import './App.css';
import { MovieDetailPage } from './pages/MovieDetailPage';
import { Routes, Route } from 'react-router-dom';
import Mypage from './pages/Mypage';
const App = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const openSignupModal = () => setIsSignupModalOpen(true);
    const closeSignupModal = () => setIsSignupModalOpen(false);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/movie-detail/:id" element={<MovieDetailPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
        </div>
    );
};

export default App;
