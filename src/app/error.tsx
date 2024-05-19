'use client';
import Wrapper from '@/components/ui/Wrapper';

const error = () => {
  return (
    <Wrapper>
      <h2 className='text-4xl mb-6 '>Something Went Wrong</h2>
      <p>Try refresh the page</p>
    </Wrapper>
  );
};
export default error;
