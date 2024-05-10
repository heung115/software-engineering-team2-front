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

    const validateForm = (email, password, confirmPassword, setErrors) => {
        let isValid = true;
        const newErrors = {};
        
        console.log(email, password, confirmPassword)

        if (!email) {
            isValid = false;
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            newErrors.email = 'Email address is invalid';
        }

        if (!password) {
            isValid = false;
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            isValid = false;
            newErrors.password = 'Password must be at least 6 characters long';
        }

        if (password !== confirmPassword) {
            isValid = false;
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return isValid;
    }

    return { signup, validateForm, isLoading, error, isSuccess };
}

export default useSignup;
