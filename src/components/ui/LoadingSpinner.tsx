import { twMerge } from 'tailwind-merge';

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div className='flex items-center justify-center'>
      <span
        className={twMerge(
          `flex h-9 w-9 animate-spin-fast rounded-full
        border-2 border-white/40 border-r-white border-t-white`,
          className
        )}
      ></span>
    </div>
  );
};
export default LoadingSpinner;
