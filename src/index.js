import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import AProposPage from './pages/AProposPage/index.jsx';
import LogementPage from './pages/LogementPage/index.jsx';
import Error from './pages/Error/index.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/a-propos-page" element={< AProposPage/>} />
                <Route path="/logement-page/:id" element={<LogementPage />} />
                <Route path="*" element={<Error />} /> 
                <Route path= "/" element={<Navigate replace to = "/" />} />
            </Routes>
    </HashRouter>
);
reportWebVitals();