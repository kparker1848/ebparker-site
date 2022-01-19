import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.scss';


const App = () => {
    return (
        <BrowserRouter>
            <Navigation  />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />}>
                        </Route>
                        <Route exact path="/Projects" element={<Projects />}>
                        </Route>
                    </Routes>
                </main>
        </BrowserRouter>
    );
};

export default App;