import Wrapper from '@/components/ui/Wrapper';
import Statistics from './Statistics';

const Why = () => {
  return (
    <section id='why' className='py-20 bg-blue-50 '>
      <Wrapper className=''>
        <h2 className='font-medium text-4xl font-serif text-primary text-center mb-14'>
          Why Choose Swift Law
        </h2>
        <Statistics />
      </Wrapper>
    </section>
  );
};
export default Why;
