import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />}>
                        </Route>
                    </Routes>
                </main>
        </BrowserRouter>
    );
};

export default App;