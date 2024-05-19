import Wrapper from '@/components/ui/Wrapper';
import PlaceCard from './PlaceCard';
import London from '@/assets/icons/London';
import Cairo from '@/assets/icons/Cairo';
import NewJersey from '@/assets/icons/NewJersey';
import Dubai from '@/assets/icons/Dubai';

const Places = () => {
  return (
    <section className='py-20'>
      <Wrapper>
        <h2 className='font-medium text-4xl font-serif text-primary mb-16'>
          Where to find us
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <PlaceCard
            city='Cairo'
            location='42 Nile Avenue, Sphinx District, Cairo
            '
            icon={<Cairo />}
          />
          <PlaceCard
            city='London'
            location='39 Maple Street, Southwark, London, UK'
            icon={<London />}
          />
          <PlaceCard
            city='Dubai'
            location='22 Golden Sands Boulevard, Dubai Marina, Dubai'
            icon={<Dubai />}
          />
          <PlaceCard
            city='New Jersey'
            location='95 Third Avenue, 14th Floor New Jersey'
            icon={<NewJersey />}
          />
        </div>
      </Wrapper>
    </section>
  );
};
export default Places;
