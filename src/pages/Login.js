import React from 'react';
import { supabase } from '../services/Supabase';

function Login() {
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000',
                data: {
                    user_name: null,
                    avatar_url: null,
                },
            },
        });

        if (error) {
            console.error('Error logging in:', error.message);
        } else {
            console.log('Login data:', data);
        }
    };
    const logOut = async () => {
        const { error } = await supabase.auth.signOut();
        alert('로그아웃 되었습니다');
    };
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login with Google</button>
            <h2>LogOut</h2>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}

export default Login;
