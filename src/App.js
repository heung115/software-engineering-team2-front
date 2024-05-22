import React, { useState } from 'react';
import { MainPage } from './pages/MainPage';
import './App.css';
import { MovieDetailPage } from './pages/MovieDetailPage';
import { Routes, Route } from 'react-router-dom';

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
            </Routes>
        </div>
    );
};

export default App;
