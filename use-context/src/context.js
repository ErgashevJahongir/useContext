import { createContext, useState } from 'react';

export const UserCon = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([
        { name: 'Bobur', id: 1, pul: 1000 },
        { name: 'Jalol', id: 2, pul: 2000 },
        { name: 'Botir', id: 3, pul: 4000 },
        { name: 'Sanjar', id: 4, pul: 3000 },
    ]);

    return (
        <UserCon.Provider value={[user, setUser]}>{children}</UserCon.Provider>
    );
};
