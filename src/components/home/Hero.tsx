'use client';
import { motion } from 'framer-motion';
import Wrapper from '../ui/Wrapper';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='bg-hero bg-cover bg-no-repeat h-[700px]'>
      <Wrapper>
        <div className='pt-40 flex justify-between gap-6'>
          <div className='lg:w-1/2'>
            <motion.h1
              key={'title'}
              initial={{ opacity: 0, y: -15, x: -50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.4,
                type: 'just',
              }}
              className='text-4xl md:text-5xl font-semibold text-white mb-8'
            >
              Your Trusted Legal Partner for Personal and Business Success
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
              className='text-zinc-200 md:text-lg'
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
                className='px-10 py-2.5 rounded-md text-white font-medium text-xl
              bg-primary hover:bg-secondary/80 duration-200 mt-8 inline-block
              '
              >
                Free Consultation
              </Link>
            </motion.div>
          </div>
          <div
            className='bg-black/30 flex items-center h-fit
           flex-col max-lg:hidden'
          >
            <div className='flex flex-col items-center mb-10'>
              <div
                className='text-8xl text-bright-gold font-bold inline-block mb-4
            '
              >
                +500
              </div>
              <p className=' text-3xl text-white font-semibold '>Clients</p>
            </div>
            <div className='flex justify-between gap-6'>
              <div className='text-center flex flex-col items-center gap-2 '>
                <div className='text-6xl font-medium text-bright-gold mb-2'>
                  20
                </div>
                <p className='text-2xl text-white font-semibold'>Countries</p>
              </div>
              <div className='text-center flex flex-col items-center gap-2 '>
                <div className='text-6xl font-medium text-bright-gold mb-2'>
                  97%
                </div>
                <p className='text-2xl text-white font-semibold'>
                  Success rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default Hero;
