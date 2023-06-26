import { Outlet } from 'react-router-dom';
import Navmenu from '../NavMenu/NavMenu';

const MainLayout = () => {
    return (
        <div className="container">
            <Navmenu />
            <Outlet />
        </div>
    );
};

export default MainLayout;
