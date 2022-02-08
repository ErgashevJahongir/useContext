import React, { useContext, useState } from 'react';
import { UserCon } from './context';

export default function Add() {
    const [user, setUser] = useContext(UserCon);
    const [addName, setAddName] = useState('');
    const [addPul, setAddPul] = useState('');

    const addUser = () => {
        if (addName && addPul) {
            setUser([
                ...user,
                {
                    name: addName,
                    pul: addPul,
                    id: user.length + 1,
                },
            ]);
            setAddName('');
            setAddPul('');
        }
    };

    return (
        <div>
            <input
                onChange={(e) => setAddName(e.target.value.trim())}
                value={addName}
                type="text"
                placeholder="Ismingizni yozing"
            />
            <input
                onChange={(e) => setAddPul(e.target.value.trim())}
                value={addPul}
                type="text"
                placeholder="Maoshingizni yozing"
            />
            <button onClick={() => addUser()}>Add</button>
        </div>
    );
}
