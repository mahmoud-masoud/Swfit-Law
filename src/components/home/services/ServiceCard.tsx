import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  title: string;
  path: string;
  description: string;
  icon: ReactNode;
};

const ServiceCard = ({ title, path, description, icon }: Props) => {
  return (
    <div className=''>
      <Link href={`services/${path}`}>
        <div
          className='border-2 border-indigo-200 p-6 md:p-8 rounded-3xl shadow shadow-blue-200
            
      transition-all duration-200 bg-primary h-full hover:bg-primary/95
      flex flex-col justify-between'
        >
          <div className='max-sm:flex-col  flex justify-between gap-4 mb-6'>
            <div className='relative'>
              <div className='relative z-10'>{icon}</div>
              <span
                className='top-0 z-0 absolute w-12 h-12 translate-x-1/3
             rounded-full bg-secondary'
              ></span>
            </div>
            <h3
              className='font-medium
           text-primary bg-white/80 rounded-full h-fit w-fit p-1 px-4'
            >
              {title}
            </h3>
          </div>

          <p className='text-white font-medium mb-2'>{description} </p>

          <div className='text-secondary flex gap-2 hover:underline justify-end'>
            <span className='font-medium'>read more</span>
            <ArrowIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ServiceCard;

const ArrowIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6 text-white'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
      />
    </svg>
  );
};
