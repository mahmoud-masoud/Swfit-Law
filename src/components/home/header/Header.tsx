import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='shadow sticky top-0 bg-white z-50'>
      <Navbar />

      <MobileNavbar />
    </header>
  );
};
export default Header;
