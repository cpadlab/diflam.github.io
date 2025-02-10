
import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import { HomePage } from './pages/home/HomePage';

function App() {
    
    const location = useLocation();

    return (     
        <Routes location={location} key={location.pathname}>
                
            <Route path="/" element={<HomePage />} />            

        </Routes>
    );
}

export default App;
