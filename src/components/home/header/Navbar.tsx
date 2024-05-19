import Logo from '@/components/ui/Logo';
import Wrapper from '@/components/ui/Wrapper';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Reviews',
    path: '/reviews',
  },
];

const Navbar = () => {
  return (
    <Wrapper>
      <nav className='hidden md:flex justify-between items-center py-1'>
        <Logo />
        <div className='flex items-center gap-10'>
          <ul className='flex gap-4 text-slate-800 text-lg font-medium'>
            {navLinks.map((item) => {
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className='p-4 inline-block hover:bg-blue-50'
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={'/contact'}
            className='inline-block py-3 px-6 rounded-lg bg-primary
           hover:bg-primary/85 duration-200 text-white font-medium text-lg'
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;
