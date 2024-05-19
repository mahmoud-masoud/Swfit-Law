'use client';
import { motion } from 'framer-motion';
import Wrapper from '../ui/Wrapper';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='bg-hero bg-black bg-cover bg-no-repeat h-[700px]'>
      <Wrapper>
        <div className='pt-40 flex justify-between gap-6 max-w-screen-lg'>
          <div className=''>
            <motion.h1
              key={'title'}
              initial={{ opacity: 0, y: -15, x: -50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.4,
                type: 'just',
              }}
              className='text-4xl md:text-7xl font-semibold text-white mb-8'
            >
              Your Trusted Legal Partner for{' '}
              <span className='text-primary bg-white text-3xl md:text-5xl inline-block mt-4'>
                {' '}
                Personal
              </span>{' '}
              and{'  '}
              <span className='text-amber-400 inline-block'>
                {'  '}
                Business Success
              </span>
            </motion.h1>
            <motion.p
              key={'sub title'}
              initial={{ opacity: 0, y: -10, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.3,
                type: 'just',
                delay: 0.2,
              }}
              className='text-white text-sm sm:text-lg '
            >
              We providing comprehensive legal services tailored to meet the
              unique needs of individuals and businesses. Whether you are
              navigating personal legal challenges to build your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -10, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.3,
                type: 'just',
                delay: 0.4,
              }}
            >
              <Link
                href={'contact'}
                className='px-10 py-2 md:py-3 rounded-md text-white font-medium
                 text-xl md:text-2xl
              bg-primary hover:bg-secondary/80 duration-200 mt-8 inline-block
              '
              >
                Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Hero;
