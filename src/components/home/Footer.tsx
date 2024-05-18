import Link from 'next/link';
import Wrapper from '../ui/Wrapper';

const quickLinks = [
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Why Us?', path: '#why' },
  { name: 'Reviews', path: '/reviews' },
];
const legal = [
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Disclosure', path: '/disclosure' },
];

const Footer = () => {
  return (
    <footer className='bg-dark text-blue-50 py-20'>
      <Wrapper>
        <nav className=' flex flex-col md:flex-row gap-12 justify-between '>
          <span className='text-xl font-semibold'>Logo</span>
          <div>
            <div className='mb-4 text-xl'>Quick links</div>
            <ul className='flex gap-2 flex-col'>
              {quickLinks.map((item) => {
                return (
                  <li key={item.path}>
                    <Link href={item.path} className='hover:underline'>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className='mb-4 text-xl'>Legal</div>
            <ul className='flex gap-2 flex-col'>
              {legal.map((item) => {
                return (
                  <li key={item.path}>
                    <Link href={item.path} className='hover:underline'>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className='mb-4 text-xl'>Contact Us</div>
            <ul className='flex gap-2 flex-col'>
              <li>support@finlywealth.com</li>
              <li>911-987654321</li>
            </ul>
          </div>
        </nav>
      </Wrapper>
    </footer>
  );
};
export default Footer;
