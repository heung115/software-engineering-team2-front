import React, { useContext } from 'react';
import { SessionContext } from '../services/SessionProvider';
function UserProfile() {
    const session = useContext(SessionContext); // 세션 데이터를 가져옴

    if (!session) {
        return <div>Please log in.</div>;
    }
    const { user } = session.user;

    console.log('UserProfile session', session);
    return (
        <div>
            <h1>User Profile</h1>
            <p>Email: {session.user.email}</p>
        </div>
    );
}

export default UserProfile;
