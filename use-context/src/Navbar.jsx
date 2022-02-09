import React, { useContext } from 'react';
import { UserCon } from './context';
import { YoshCon } from './context';

export default function Navbar() {
    const [user, setUser] = useContext(UserCon);
    const [yosh, setYosh] = useContext(YoshCon);

    return (
        <div>
            <h1>Foydalanuvchilar soni: {user.length}</h1>
            <p>Foydalanuvchi yoshi: {yosh}</p>
            <button onClick={() => setYosh(50)}>Yangi yosh</button>
        </div>
    );
}
