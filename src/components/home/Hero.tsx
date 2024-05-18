'use client';
import { motion } from 'framer-motion';
import Wrapper from '../ui/Wrapper';

const Hero = () => {
  return (
    <section className='bg-hero bg-cover bg-no-repeat h-[700px]'>
      <Wrapper>
        <div className='pt-40 max-w-2xl'>
          <motion.h1
            initial={{ opacity: 0, y: -15, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.4,
              type: 'just',
            }}
            className='text-5xl font-semibold text-white mb-8'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.3,
              type: 'just',
              delay: 0.2,
            }}
            className='text-zinc-300'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            exercitationem provident hic, suscipit maxime voluptatem dolores
            atque ducimus unde. Optio hic, ratione eligendi perferendis dolore
            labore placeat. Reprehenderit, optio repellendus?
          </motion.p>
        </div>
      </Wrapper>
      <div></div>
    </section>
  );
};
export default Hero;
