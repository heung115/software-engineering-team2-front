import React, { createContext, useState, useEffect } from 'react'; // supabase 클라이언트 설정 파일을 임포트
import { supabase } from '../services/Supabase';

export const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange(
            (event, session) => {
                try {
                    if (event === 'SIGNED_OUT') {
                        setSession(null);
                    } else if (session) {
                        setSession(session);
                    }
                } catch (error) {
                    console.error('Error handling auth state change', error);
                }
            },
        );

        return () => {
            // subscription.unsubscribe();
        };
    }, []);

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionProvider;
