import { Outlet } from 'react-router-dom';
import Navmenu from '../NavMenu/NavMenu';

const MainLayout = () => {
    return (
        <div className="flex">
            <Navmenu />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
