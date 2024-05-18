const Statistics = () => {
  return (
    <section className='bg-primary rounded-xl md:rounded-[40px] px-6 py-8 md:p-14'>
      <div className='relative flex flex-col md:flex-row justify-between gap-14 md:gap-20 '>
        <span className='absolute h-full w-[.7px] bg-slate-400/50 right-1/2 max-md:hidden'></span>
        <div className='flex-1 flex flex-col gap-8 md:max-w-md'>
          <span className='text-6xl md:text-7xl font-black text-secondary'>
            95%
          </span>
          <p className='text-lg text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            mollitia perspiciatis fuga iusto voluptatum cumque nostrum sunt
            illo, expedita esse aliquid eos ex nisi natus delectus dolores
            inventore aut molestiae.
          </p>
          <button
            className='bg-secondary px-4 py-2 rounded-lg text-lg
           font-medium text-white tracking-wide'
          >
            Book a free consultation
          </button>
        </div>

        <div className='relative flex-1 md:max-w-sm flex flex-col justify-between gap-10'>
          <span className='absolute w-full h-[.7px] bg-slate-400/50 top-1/2'></span>
          <div>
            <span className='text-4xl font-bold text-secondary mb-4 inline-block'>
              +10
            </span>
            <p className='text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              odit fugiat porro!
            </p>
          </div>
          <div>
            <span className='text-4xl font-bold text-secondary mb-4 inline-block'>
              +500
            </span>
            <p className='text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              odit fugiat porro!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Statistics;
