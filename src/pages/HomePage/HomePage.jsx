import DashboardSideMenu from '@/shared/DashboardSideMenu';
import Navbar from '@/shared/Navbar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className='lg:flex lg:mr-6 lg:ml-0 mx-3 h-40'>
                <DashboardSideMenu/>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default HomePage;