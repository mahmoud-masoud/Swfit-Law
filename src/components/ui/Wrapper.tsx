import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge('container mx-auto max-w-screen-xl px-4', className)}
    >
      {children}
    </div>
  );
};
export default Wrapper;
