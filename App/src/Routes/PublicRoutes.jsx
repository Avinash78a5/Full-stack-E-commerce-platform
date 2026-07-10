import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux';

const PublicRoutes = () => {

    const user = useSelector(state => state.userData.user);

    return user ? <Navigate to="/home"/> : <Outlet/>
}

export default PublicRoutes