import React from 'react';
import { Route, Routes } from 'react-router-dom'; 

import Home from './components/Home';
import App from './App';

export const RoutesIndex = (props) => {
    return (
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
)
}
 
export default Routes ;