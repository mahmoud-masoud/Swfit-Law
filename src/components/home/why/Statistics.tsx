import Link from 'next/link';

const Statistics = () => {
  return (
    <section className='bg-primary rounded-xl md:rounded-[40px] px-6 py-8 md:p-14'>
      <div className='relative flex flex-col md:flex-row justify-between gap-14 md:gap-20 '>
        <span className='absolute h-full w-[.7px] bg-slate-400/50 right-1/2 max-md:hidden'></span>
        <div className='flex-1 flex flex-col gap-8 md:max-w-md'>
          <span className='text-6xl md:text-7xl font-black text-bright-gold'>
            97%
          </span>
          <p className='text-lg text-white'>
            Our law firm wins 97% of our cases. With a skilled team and proven
            track record, we are dedicated to achieving the best results for our
            clients. Trust us to handle your legal needs with confidence and
            expertise. Let us guide you through every step of the legal process.
          </p>
          <Link
            href={'contact'}
            className='inline-block text-center bg-white hover:bg-blue-50 duration-200 px-4 py-2 rounded-lg text-lg
           font-medium text-primary tracking-wide'
          >
            Book a free consultation
          </Link>
        </div>

        <div className='relative flex-1 md:max-w-sm flex flex-col justify-between gap-10'>
          <span className='absolute w-full h-[.7px] bg-slate-400/50 top-1/2'></span>
          <div>
            <span className='text-4xl md:text-5xl font-bold text-bright-gold mb-5 inline-block'>
              +10
            </span>
            <p className='text-white'>
              Ten years of trusted legal advocacy - Swift Law is here to guide
              you through every step of your journey
            </p>
          </div>
          <div>
            <span className='text-4xl md:text-5xl font-bold text-bright-gold mb-5 inline-block'>
              +500
            </span>
            <p className='text-white'>
              With over 500 clients served in the past decade, Swift Law
              continues to provide trusted and expert legal representation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Statistics;
