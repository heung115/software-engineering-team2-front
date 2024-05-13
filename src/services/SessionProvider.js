import React, { createContext, useState, useEffect } from 'react';
import { supabase } from './Supabase';

export const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
    const [session, setSession] = useState({
        'isLogin': false,
        'userId': "no-id",
        'isSelect': true
    });

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange(
            (event, session) => {
                console.log(session)
                try {
                    if (event === 'SIGNED_OUT') {
                        setSession({
                            'isLogin': false,
                            'userId': "no-id",
                            'isSelect': true
                        });
                    } else if (session) {
                        setSession({
                            'isLogin': true,
                            'userId': session.user.id,
                            'isSelect': false
                        })
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
