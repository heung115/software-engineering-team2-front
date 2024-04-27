import React from 'react';
import Login from './pages/Login';
import UserProfile from './components/UserProfile';

const App = () => {
    return (
        <div>
            <h1>Supabase Auth Example</h1>
            <UserProfile />
            <Login />
        </div>
    );
};

export default App;
