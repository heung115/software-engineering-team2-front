// useSignup.js
import { useState } from 'react';
import { supabase } from '../services/Supabase';

function useSignup() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const signup = async (email, password, onSuccess) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        user_name: null,
                        avatar_url: null,
                    },
                },
            });
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setIsSuccess(true); // 성공 상태 설정
        } catch (error) {
            console.error('Error signing up:', error);
            setError(error.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                onSuccess();
            }, 1000);
        }
    };

    return { signup, isLoading, error, isSuccess };
}

export default useSignup;
