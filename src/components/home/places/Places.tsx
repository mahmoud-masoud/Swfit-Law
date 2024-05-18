import Wrapper from '@/components/ui/Wrapper';
import PlaceCard from './PlaceCard';

const Places = () => {
  return (
    <section className='py-20'>
      <Wrapper>
        <h2 className='font-medium text-4xl font-serif text-primary mb-10'>
          Where to find us
        </h2>

        <div className='flex justify-between gap-10 flex-wrap'>
          <PlaceCard city='Cairo' path='/' image='/cairo.jpg' />
          <PlaceCard city='London' path='/' image='/london.jpg' />
          <PlaceCard city='Dubai' path='/' image='/dubai.jpg' />
          <PlaceCard city='New York' path='/' image='/new-york.jpg' />
        </div>
      </Wrapper>
    </section>
  );
};
export default Places;
