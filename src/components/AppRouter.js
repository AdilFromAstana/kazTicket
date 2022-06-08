import React, { useState } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import {useSelector} from 'react-redux';

const AppRouter = () => {

    const {isAuth} = useSelector(state=>state.auth);

    return (
        <Routes>
            {isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            {
            publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )
            }
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;