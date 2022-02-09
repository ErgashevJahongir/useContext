import { useState } from 'react';
import Add from './Add';
import './App.css';
import { UserCon } from './context';
import { YoshCon } from './context';
import Navbar from './Navbar';
import Users from './Users';

function App() {
    const [user, setUser] = useState([
        { name: 'Bobur', id: 1, pul: 1000 },
        { name: 'Jalol', id: 2, pul: 2000 },
        { name: 'Botir', id: 3, pul: 4000 },
        { name: 'Sanjar', id: 4, pul: 3000 },
    ]);

    const [yosh, setYosh] = useState(120);

    // useContext orqali faqat bitta stete malumotlarini valuega bersak bo'ladi

    return (
        <UserCon.Provider value={[user, setUser]}>
            <YoshCon.Provider value={[yosh, setYosh]}>
                <Navbar />
                <Add />
                <Users />
            </YoshCon.Provider>
        </UserCon.Provider>
    );
}

export default App;
