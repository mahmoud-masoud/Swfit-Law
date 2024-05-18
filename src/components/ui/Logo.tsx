import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href={'/'}
      className='block bg-primary text-secondary rounded-full h-10 w-10 font-semibold'
    >
      Logo
    </Link>
  );
};
export default Logo;
