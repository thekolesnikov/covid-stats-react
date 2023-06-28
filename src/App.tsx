import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import StatsPage from './pages/StatsPage/StatsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<StatsPage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
