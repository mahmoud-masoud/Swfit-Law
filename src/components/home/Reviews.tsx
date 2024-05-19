import Wrapper from '../ui/Wrapper';
import testimonials from '../../../data/testimonials';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
const Reviews = () => {
  return (
    <section className='py-24'>
      <Wrapper>
        <h2 className='font-medium text-4xl font-serif text-primary mb-16'>
          What Our Clients Say About Us
        </h2>
      </Wrapper>

      <div className='max-w-[2400px] mx-auto'>
        <div className=' flex gap-8 overflow-hidden relative'>
          <div className='h-full w-10 absolute left-0 bg-gradient-to-r from-blue-50 z-20'></div>
          <div className='h-full w-10 absolute right-0 bg-gradient-to-l from-blue-50 z-20'></div>
          <div className='flex gap-8 marquee'>
            {testimonials.slice(0, 5).map(
              (
                item: {
                  name: string;
                  message: string;
                },
                i: number
              ) => {
                return (
                  <ReviewCard key={i} name={item.name} message={item.message} />
                );
              }
            )}
          </div>
          <div className='flex gap-8 marquee'>
            {testimonials.slice(0, 5).map(
              (
                item: {
                  name: string;
                  message: string;
                },
                i: number
              ) => {
                return (
                  <ReviewCard key={i} name={item.name} message={item.message} />
                );
              }
            )}
          </div>
        </div>
      </div>
      <Wrapper className='flex justify-end mt-10'>
        <Link href={'/reviews'} className='text-lg hover:underline'>
          View all
        </Link>
      </Wrapper>
    </section>
  );
};
export default Reviews;

export const ReviewCard = ({
  name,
  message,
  className,
}: {
  name: string;
  message: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'border p-10 rounded-3xl w-80 relative bg-white',
        className
      )}
    >
      <div className='relative z-10'>
        <p className='mb-6 text-xl font-medium text-dark'>{name}</p>
        <p className='mb-4'>{message}</p>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 300 300'
        className='absolute top-2 left-4 fill-secondary/30 h-10 z-0'
      >
        <path d='M72.31 159.99c7.44-24.49 23.21-50.91 38.84-71.29 7.39-9.64 1.81-26.3-8.3-31.64-12.24-6.47-23.75-2-31.64 8.3-16.46 21.48-29.3 45.06-39.22 70.22-33.38 84.7 33.87 128 76.31 103.67 25.11-14.39 30.87-52.26 9.72-72.52-10.72-10.29-28.84-14.52-45.71-6.74zm191.72 6.73c-10.73-10.28-28.85-14.5-45.72-6.73 7.44-24.49 23.21-50.91 38.84-71.29 7.39-9.64 1.81-26.3-8.3-31.64-12.24-6.47-23.75-2-31.64 8.3-16.46 21.48-29.3 45.06-39.22 70.22-33.38 84.7 33.87 128 76.31 103.67 25.12-14.4 30.88-52.27 9.73-72.53z'></path>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 270 270'
        className='fill-blue-100 h-20 absolute -bottom-1 right-1 b'
      >
        <path d='M191.21 228.73c12.08 0 22.6-8.22 25.53-19.93l29.12-116.46c6.48-25.94-13.13-51.06-39.87-51.06-22.7 0-41.1 18.4-41.1 41.1v120.05c0 14.52 11.79 26.3 26.32 26.3zm-142 0c12.08 0 22.6-8.22 25.53-19.93l29.12-116.46c6.48-25.94-13.13-51.06-39.87-51.06-22.7 0-41.1 18.4-41.1 41.1v120.05c0 14.52 11.79 26.3 26.32 26.3z'></path>
      </svg>
    </div>
  );
};
