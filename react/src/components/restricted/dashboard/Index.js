import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardMenu from './Menu';
import MenuRoutes from '../../routing/Routes';

const Dashboard = ({ logout }) => {

    return (
        <BrowserRouter>
            <>
                <DashboardMenu logout={logout}/>
                <MenuRoutes />
            </>
        </BrowserRouter>
    )
};

export default Dashboard;