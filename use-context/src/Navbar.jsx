import React, { useContext } from 'react';
import { UserCon } from './context';

export default function Navbar() {
    const [user, setUser] = useContext(UserCon);

    return (
        <div>
            <h1>Foydalanuvchilar soni: {user.length}</h1>
        </div>
    );
}
