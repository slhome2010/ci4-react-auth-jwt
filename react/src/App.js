import React, { useState } from 'react';
import { clearState, loadJWT } from './utility/LocalStorage';
import Authentication from './components/authentication/Authentication';
import Dashboard from './components/restricted/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!loadJWT());

    const onLogin = () => {
        setIsAuthenticated(true);
    };

    const onLogout = () => {
        clearState();
        setIsAuthenticated(false);
    };

    return ( !isAuthenticated ?
        <Authentication
            setIsAuthenticated={onLogin}
        />
        :
        <Dashboard
            logout={onLogout}
        />
    )
};

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);