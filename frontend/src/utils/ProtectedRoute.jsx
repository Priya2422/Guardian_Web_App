import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';
const ProtectedRoutes = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProtectedRoutes;
