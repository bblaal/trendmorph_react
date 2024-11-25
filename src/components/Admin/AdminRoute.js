// src/components/Admin/AdminRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext'; // Adjust the path as necessary

const AdminRoute = ({ element }) => {
    const { currentUser } = useContext(UserContext);

    console.log('user: ', currentUser)
    if (currentUser?.role === 'ADMIN') {
        return element;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default AdminRoute;
