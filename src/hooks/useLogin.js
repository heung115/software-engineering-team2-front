import React, { useState, useContext, Suspense } from 'react';
import { supabase } from '../services/Supabase';
import { SessionContext } from '../services/SessionProvider';

const useLogin = () => {

    const handleGoogleLogin = async () => {
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
            return false;
        }
        return true;
    };

    const handleIdPwLogin = async ({userEmail, userPassword}) => {
        console.log("my : " + userEmail + " : " + userPassword)
        const {data, error} = await supabase.auth.signInWithPassword( {
            email: userEmail,
            password: userPassword
        });

        if (error) {
            console.log(error)
            return false;
        } else {
            return true;
        }
    }

    const handleLogOut = async () => {
        const { error } = await supabase.auth.signOut();
        
        if (error) {
            return false;
        }
        return true;
    } 

    return {handleGoogleLogin, handleIdPwLogin, handleLogOut}
}

export {useLogin};