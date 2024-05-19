'use client';
import Logo from '@/components/ui/Logo';
import Wrapper from '@/components/ui/Wrapper';
import { AnimatePresence, motion } from 'framer-motion';
import { Butcherman } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about-us',
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

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper className='md:hidden'>
      <nav className='flex justify-between py-2'>
        <Logo />
        <button
          aria-label='navbar control'
          className='relative z-10 border-2 border-transparent focus:border-blue-400'
          onClick={onClose}
        >
          <Bars />
        </button>
        <AnimatePresence>
          {isOpen && <SidNavar onClose={onClose} />}
        </AnimatePresence>
      </nav>
    </Wrapper>
  );
};
export default MobileNavbar;

const Bars = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='h-9'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
};

const SidNavar = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 w-full bg-black/40'
        onClick={onClose}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ type: 'just', duration: 0.2 }}
        className='flex flex-col max-w-80 w-full
gap-10 bg-white fixed bottom-0 top-0 py-28 items-center border-slate-400 text-lg font-medium 
border-l right-0'
      >
        <ul className='flex flex-col gap-4 text-slate-800'>
          {navLinks.map((item) => {
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={onClose}
                  className='p-4 inline-block hover:bg-blue-50 '
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={'/contact'}
          onClick={onClose}
          className='inline-block py-3 px-6 rounded-lg bg-primary w-fit
hover:bg-primary/85 duration-200 text-white font-medium'
        >
          Contact Us
        </Link>
      </motion.div>
    </>
  );
};
