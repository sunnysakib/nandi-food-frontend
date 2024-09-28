import DashboardSideMenu from '@/shared/DashboardSideMenu';
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className='lg:flex lg:mr-6 lg:ml-0 mx-3 mt-28'>
                <DashboardSideMenu/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;