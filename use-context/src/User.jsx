import React, { useContext } from 'react';
import { UserCon } from './context';

export default function User() {
    const [user, setUser] = useContext(UserCon);
    // console.log(user);

    const userDelete = (prev) => {
        setUser(() => user.filter((activ) => prev !== activ.id));
    };

    return (
        <div>
            {user.map((user, index) => (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <h3>Maoshi: {user.pul}$</h3>
                    <button onClick={() => userDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
