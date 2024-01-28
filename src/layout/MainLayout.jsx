
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default MainLayout;