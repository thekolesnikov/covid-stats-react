import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Stats from './pages/Stats/Stats';
import About from './pages/About/About';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Stats />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
